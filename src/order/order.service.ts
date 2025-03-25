import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { User } from 'src/user/entities/user.entity';
import { Status } from 'src/status/entities/status.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const order = new Order();

    order.user = { id: createOrderDto.userId } as User;
    order.status = { id: createOrderDto.statusId } as Status;

    return await this.orderRepository.save(order);
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepository.update(id, {
      user: updateOrderDto.userId ? { id: updateOrderDto.userId } : undefined,
      status: updateOrderDto.statusId
        ? { id: updateOrderDto.statusId }
        : undefined,
    });
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}
