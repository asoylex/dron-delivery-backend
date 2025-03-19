import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Station } from '../../station/entities/station.entity';

@Entity('drones')
export class Drone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  max_range_km: number;

  @Column()
  speed_km_h: number;

  @ManyToOne(() => Station, (station) => station.id, { onDelete: 'CASCADE' })
  station: Station;
}
