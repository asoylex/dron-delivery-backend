import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('stations')
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal' })
  lat: number;

  @Column({ type: 'decimal' })
  long: number;
}
