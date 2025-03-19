import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Status } from '../../status/entities/status.entity';
import { Order } from '../../order/entities/order.entity';
import { Drone } from '../../drone/entities/drone.entity';

@Entity('deliveries')
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  distance: number;

  @ManyToOne(() => Status, (status) => status.id)
  status: Status;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @OneToOne(() => Drone)
  @JoinColumn()
  drone: Drone;
}
