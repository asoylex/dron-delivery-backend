import { Injectable } from '@nestjs/common';
import { CreateDroneDto } from './dto/create-drone.dto';
import { UpdateDroneDto } from './dto/update-drone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Drone } from './entities/drone.entity';

@Injectable()
export class DroneService {
  constructor(
    @InjectRepository(Drone)
    private readonly droneRepository: Repository<Drone>,
  ) {}
  create(createDroneDto: CreateDroneDto) {
    return this.droneRepository.save(createDroneDto);
  }

  findAll() {
    return this.droneRepository.find();
  }

  findOne(id: number) {
    return this.droneRepository.findOne({ where: { id } });
  }

  update(id: number, updateDroneDto: UpdateDroneDto) {
    return this.droneRepository.update(id, updateDroneDto);
  }

  remove(id: number) {
    return this.droneRepository.delete(id);
  }
}
