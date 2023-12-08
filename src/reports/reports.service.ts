/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { DataSource } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';

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
    console.log(
      '🚀 ~ file: reports.service.ts ~ line 151 ~ ReportsService ~ create ~ result',
      result,
    );

    return null;

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

  findAll() {
    return this.dataSource.query(`SELECT * FROM reports`);
  }

  findOne(id: number) {
    return this.dataSource.query(`SELECT * FROM reports WHERE id = ?`, [id]);
  }

  // update(id: number, updateReportDto: UpdateReportDto) {
  //   return `This action updates a #${id} report`;
  // }

  remove(id: number) {
    return this.dataSource.query(`DELETE FROM reports WHERE id = ?`, [id]);
  }
}
