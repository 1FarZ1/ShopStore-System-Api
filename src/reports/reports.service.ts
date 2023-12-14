/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { DataSource } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { Report } from './entities/report.entity';
import { report } from 'process';

@Injectable()
export class ReportsService {
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    private mailerService: MailerService,
  ) {}

  async create(createReportDto: CreateReportDto, userId: number) {
    const result = await this.dataSource.query(
      `INSERT INTO reports (user_id, comment) VALUES (?,?)`,
      [userId, createReportDto.comment],
    );
    if (result.affectedRows < 1) {
      throw new InternalServerErrorException({
        message: 'An error occured while creating report',
      });
    }
    return {
      message: 'report created',
      report: {
        id: result.insertId,
        comment: createReportDto.comment,
      },
    };

    // try {
    //   const result = await this.mailerService.sendMail({
    //     from: '<fbekkouche149@gmail.com>', // List of receivers email address
    //     to: 'farzbussiness@gmail.com', // Senders email address
    //     subject: 'Testing Nest MailerModule ✔', // Subject line
    //     text: 'welcome', // plaintext body
    //     html: '<b>welcome</b>', // HTML body content
    //   });
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    //   throw new InternalServerErrorException({
    //     message: 'An error occured while sending email',
    //     error,
    //   });
    // }
  }

  async findAll() {
    const reports: Report[] = await this.dataSource.query(
      `SELECT * FROM reports`,
    );

    if (reports.length < 1) {
      return {
        message: 'no reports found',
      };
    }
    // type of reports
    console.log(reports[0].user_id);
    return {
      message: 'reports found',
      reports,
    };
  }

  async findOne(id: number) {
    const report = await this.dataSource.query(
      `SELECT * FROM reports WHERE id = ?`,
      [id],
    );
    if (report.length < 1) {
      throw new NotFoundException({
        message: 'report not found',
      });
    }
    return {
      message: 'report found',
      report,
    };
  }

  // update(id: number, updateReportDto: UpdateReportDto) {
  //   return `This action updates a #${id} report`;
  // }

  remove(id: number) {
    return this.dataSource.query(`DELETE FROM reports WHERE id = ?`, [id]);
  }
}
