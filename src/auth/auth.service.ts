/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): string {
    return 'This action returns all cats';
  }
}
