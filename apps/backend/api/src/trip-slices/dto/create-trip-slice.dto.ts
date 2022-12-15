import { Trip } from 'src/trips/entities/trip.entity';

export class CreateTripSliceDto {
  startingPoint: string;
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
