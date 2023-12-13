/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';
import { User } from '../auth/entity/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();


    const reqUser = request.user;
    const user:User = (await this.usersService.findOne(reqUser.user_id)).user;
    const hasRole = () => roles.includes(user?.role);
    return user && user.role && hasRole();
  }
}
