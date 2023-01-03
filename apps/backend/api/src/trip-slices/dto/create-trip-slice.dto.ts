import { IsNotEmpty, Length } from 'class-validator';
import { Trip } from 'src/trips/entities/trip.entity';

export class CreateTripSliceDto {
  @IsNotEmpty()
  @Length(4, 255)
  startingPoint: string;

  @IsNotEmpty()
  @Length(4, 255)
  endingPoint: string;

  startingPointLat: number;
  startingPointLng: number;
  endingPointLat: number;
  endingPointLng: number;
  startingDateTime: Date;
  endingDateTime: Date;
  totalSeat: number;
  price: number;
  itineraryUrl: string;
  hasTolls: boolean;
  trip: Trip;
}
