import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('stations')
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 20, scale: 15 })
  lat: number;

  @Column({ type: 'decimal', precision: 20, scale: 15 })
  long: number;
}
