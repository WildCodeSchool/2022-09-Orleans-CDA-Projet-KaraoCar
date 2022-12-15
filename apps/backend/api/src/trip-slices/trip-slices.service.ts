import { Injectable } from '@nestjs/common';
import { CreateTripSliceDto } from './dto/create-trip-slice.dto';
import { UpdateTripSliceDto } from './dto/update-trip-slice.dto';

@Injectable()
export class TripSlicesService {
  create(createTripSliceDto: CreateTripSliceDto) {
    return 'This action adds a new tripSlice';
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
