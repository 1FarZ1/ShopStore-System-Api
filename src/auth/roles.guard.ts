/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';
import { User } from './entity/user.entity';
import { log } from 'console';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();

    log("🚀 ~ file: roles.guard.ts:80 ~ RolesGuard ~ roles", roles)
    log("🚀 ~ file: roles.guard.ts:81 ~ RolesGuard ~ request", request.user)
    const user:User = await this.usersService.findOne(request.user.user_id);
    log("🚀 ~ file: roles.guard.ts:81 ~ RolesGuard ~ request", user)

    const hasRole = () => roles.includes(user?.role);
    return user && user.role && hasRole();
  }
}
