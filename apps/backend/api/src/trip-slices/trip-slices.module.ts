import { Module } from '@nestjs/common';
import { TripSlicesService } from './trip-slices.service';
import { TripSlicesController } from './trip-slices.controller';

@Module({
  controllers: [TripSlicesController],
  providers: [TripSlicesService]
})
export class TripSlicesModule {}
