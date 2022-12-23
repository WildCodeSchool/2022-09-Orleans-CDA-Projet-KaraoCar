import { Injectable } from '@nestjs/common';
import { CreateMusicalStyleDto } from './dto/create-musical-style.dto';
import { UpdateMusicalStyleDto } from './dto/update-musical-style.dto';

@Injectable()
export class MusicalStylesService {
  create(createMusicalStyleDto: CreateMusicalStyleDto) {
    return 'This action adds a new musicalStyle';
  }

  findAll() {
    return `This action returns all musicalStyles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musicalStyle`;
  }

  update(id: number, updateMusicalStyleDto: UpdateMusicalStyleDto) {
    return `This action updates a #${id} musicalStyle`;
  }

  remove(id: number) {
    return `This action removes a #${id} musicalStyle`;
  }
}
