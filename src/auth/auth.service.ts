/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string): boolean {
    if (email === 'f_bekkouche@estin' && password === '123456') {
      return true;
    }
    return false;
  }
}
