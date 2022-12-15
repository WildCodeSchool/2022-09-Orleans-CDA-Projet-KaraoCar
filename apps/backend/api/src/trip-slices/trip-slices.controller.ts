import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TripSlicesService } from './trip-slices.service';
import { CreateTripSliceDto } from './dto/create-trip-slice.dto';
import { UpdateTripSliceDto } from './dto/update-trip-slice.dto';

@Controller('trip-slices')
export class TripSlicesController {
  constructor(private readonly tripSlicesService: TripSlicesService) {}

  @Post()
  create(@Body() createTripSliceDto: CreateTripSliceDto) {
    return this.tripSlicesService.create(createTripSliceDto);
  }

  @Get()
  findAll() {
    return this.tripSlicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripSlicesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTripSliceDto: UpdateTripSliceDto,
  ) {
    return this.tripSlicesService.update(+id, updateTripSliceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripSlicesService.remove(+id);
  }
}
