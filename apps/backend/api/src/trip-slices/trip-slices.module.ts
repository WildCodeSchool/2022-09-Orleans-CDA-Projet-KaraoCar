import { Module } from '@nestjs/common';
import { TripSlicesService } from './trip-slices.service';
import { TripSlicesController } from './trip-slices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripSlice } from './entities/trip-slice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripSlice])],
  controllers: [TripSlicesController],
  providers: [TripSlicesService],
})
export class TripSlicesModule {}
