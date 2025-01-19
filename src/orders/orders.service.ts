import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [];

  findAll() {
    return this.orders;
  }

  create(order) {
    this.orders.push(order);
    return order;
  }
}
