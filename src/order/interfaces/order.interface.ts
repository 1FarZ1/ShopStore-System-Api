/* eslint-disable prettier/prettier */


export interface Order {
    id: number;
    user_id: number;
    total_price: number;
    createdAt: Date;
    updatedAt: Date;
}