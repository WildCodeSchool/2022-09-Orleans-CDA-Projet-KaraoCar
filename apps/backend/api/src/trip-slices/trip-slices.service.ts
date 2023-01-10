import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTripSliceDto } from './dto/create-trip-slice.dto';
import { UpdateTripSliceDto } from './dto/update-trip-slice.dto';
import { TripSlice } from '../entities/trip-slice.entity';

@Injectable()
export class TripSlicesService {
  constructor(
    @InjectRepository(TripSlice)
    private readonly tripSliceRepository: Repository<TripSlice>,
  ) {}

  create(createTripSliceDto: CreateTripSliceDto) {
    return this.tripSliceRepository.save(createTripSliceDto);
  }

  findAll() {
    return `This action returns all tripSlices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tripSlice`;
  }

  update(id: number, updateTripSliceDto: UpdateTripSliceDto) {
    return `This action updates a #${id} tripSlice`;
  }

  remove(id: number) {
    return `This action removes a #${id} tripSlice`;
  }
}
