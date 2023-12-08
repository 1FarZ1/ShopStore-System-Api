import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateReportDto {
  // @IsNumber(
  //   {
  //     allowNaN: false,
  //     allowInfinity: false,
  //     maxDecimalPlaces: 0,
  //   },
  //   {
  //     message: 'User id must be an integer',
  //   },
  // )
  // @ApiProperty({
  //   description: 'User id',
  //   type: Number,
  // })
  // userId: number;

  @IsString({
    message: 'Comment must be a string',
  })
  @ApiProperty({
    description: 'Comment',
    type: String,
  })
  comment: string;
}
