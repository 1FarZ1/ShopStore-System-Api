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
// import { Roles } from 'src/common/roles.decorator';
// import { RolesGuard } from 'src/common/roles.guard';
// import { Role } from 'src/auth/entity/user.entity';
// import { UpdateReportDto } from './dto/update-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  create(@Body() createReportDto: CreateReportDto, @Req() req: any) {
    return this.reportsService.create(
      createReportDto,

      req.user.user_id,
    );
  }

  @Get()
  @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  findAll() {
    return this.reportsService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.reportsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
  //   return this.reportsService.update(+id, updateReportDto);
  // }

  // @Delete(':id')
  // @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)
  // remove(@Param('id') id: string) {
  //   return this.reportsService.remove(+id);
  // }
}
