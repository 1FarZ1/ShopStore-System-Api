/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { DataSource } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { Report } from './entities/report.entity';
import { report } from 'process';
import { IsNotEmpty } from 'class-validator';

@Injectable()
export class ReportsService {
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource, // private mailerService: MailerService,
  ) {}

  async create(createReportDto: CreateReportDto, userId: number) {
    const result = await this.dataSource.query(
      `INSERT INTO report (user_id,comment) VALUES (?,?)`,
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

    // ----------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------ NODE MAILER ---------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------

    // try {
    //   const result = await this.mailerService.sendMail({
    //     from: '<test@gmail.com>', // List of receivers email address
    //     to: 'test@gmail.com', // Senders email address
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
    // ----------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------ NODE MAILER ---------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------
  }

  async findAll(limit: number = 10, pageNumber: number = 0) {
    const offset = pageNumber > 0 ? pageNumber * limit : 0;
    const reports: Report[] = await this.dataSource.query(
      `SELECT report.id,report.comment,user.id as user_id,user.name as user_name,user.email as user_email FROM report INNER JOIN user ON report.user_id = user.id LIMIT ? OFFSET ?`,
      [limit, offset],
    );

    return reports;
  }

  async findOne(id: number) {
    const result: Report[] = await this.dataSource.query(
      `SELECT * FROM report WHERE id = ?`,
      [id],
    );

    if (result.length < 1) {
      throw new NotFoundException({
        message: 'report not found',
      });
    }

    const report = result[0];

    return report;
  }
}
