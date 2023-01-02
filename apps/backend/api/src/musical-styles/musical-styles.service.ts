import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMusicalStyleDto } from './dto/create-musical-style.dto';
import { UpdateMusicalStyleDto } from './dto/update-musical-style.dto';
import { MusicalStyle } from './entities/musical-style.entity';

@Injectable()
export class MusicalStylesService {
  constructor(
    @InjectRepository(MusicalStyle)
    private readonly musicalStyleRepository: Repository<MusicalStyle>,
  ) {}

  create(createMusicalStyleDto: CreateMusicalStyleDto) {
    return this.musicalStyleRepository.save(createMusicalStyleDto);
  }

  findAll() {
    return this.musicalStyleRepository.find();
  }

  findOne(id: number) {
    return this.musicalStyleRepository.findOne({ where: [{ id: id }] });
  }

  update(id: number, updateMusicalStyleDto: UpdateMusicalStyleDto) {
    return `This action updates a #${id} musicalStyle`;
  }

  remove(id: number) {
    return `This action removes a #${id} musicalStyle`;
  }
}
