import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  // Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/common/roles.guard';
import { Roles } from 'src/common/roles.decorator';
import { Role } from 'src/auth/entity/user.entity';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)
  async findAll() {
    const result = await this.reportsService.findAll();
    if (result) {
      return {
        message: 'reports found',
        reports: result,
      };
    }
    return {
      message: 'no reports found',
    };
  }

  @Get(':id')
  @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    const result = await this.reportsService.findOne(+id);
    return result;
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  create(@Body() createReportDto: CreateReportDto, @Req() req: any) {
    return this.reportsService.create(
      createReportDto,

      req.user.user_id,
    );
  }
}
