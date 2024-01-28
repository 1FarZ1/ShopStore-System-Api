/* eslint-disable prettier/prettier */
// interface for report

import { User } from "src/auth/entity/user.entity";

export interface Report {
    id: number;
    comment: string;
    createdAt: Date;
    user_id: User;
    }
