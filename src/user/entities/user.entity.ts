import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BeforeInsert,
  OneToOne,
} from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import * as bcrypt from 'bcrypt';
import { Client } from '../../client/entities/client.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.users, { nullable: true })
  role: Role;

  @OneToOne(() => Client, (client) => client.user, {
    nullable: true,
    eager: true,
  })
  client: Client;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
