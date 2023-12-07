/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}

  create(createReportDto: CreateReportDto) {
    return this.dataSource.query(
      `INSERT INTO reports (user_id, product_id, comment, rate) VALUES (?, ?, ?, ?)`,
      [
        createReportDto.userId,
        createReportDto.productId,
        createReportDto.comment,
        createReportDto.rate,
      ],
    );
  }

  findAll() {
    return `This action returns all reports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
}
