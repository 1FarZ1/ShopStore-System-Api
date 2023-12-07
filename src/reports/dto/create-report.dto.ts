import { IsNumber, IsString } from 'class-validator';

export class CreateReportDto {
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 0,
    },
    {
      message: 'User id must be an integer',
    },
  )
  userId: number;

  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 0,
    },
    {
      message: 'Product id must be an integer',
    },
  )
  productId: number;

  @IsString({
    message: 'Comment must be a string',
  })
  comment: string;

  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 0,
    },
    {
      message: 'Rate must be an integer between 1 and 5',
    },
  )
  rate: number;
}
