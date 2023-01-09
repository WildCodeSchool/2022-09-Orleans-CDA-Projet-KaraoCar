import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  Min,
  MaxLength,
  MinDate,
  IsDate,
} from 'class-validator';
import { Trip } from '../../entities/trip.entity';

export class CreateTripSliceDto {
  @IsNotEmpty({ message: 'Starting point is required' })
  @MaxLength(255, {
    message: 'Starting point must be below 255 characters long',
  })
  startingPoint: string;

  @IsNotEmpty({ message: 'Ending point is required' })
  @MaxLength(255, {
    message: 'Ending point must be below 255 characters long',
  })
  endingPoint: string;

  startingPointLat: number;

  startingPointLng: number;

  endingPointLat: number;

  endingPointLng: number;

  @IsNotEmpty({ message: 'Starting date time is required' })
  @IsDate({ message: 'Invalid starting date time' })
  @Transform(({ value }) => value && new Date(value))
  @MinDate(new Date(), {
    message: 'Starting date time must be greater than now',
  })
  startingDateTime: Date;

  @IsNotEmpty({ message: 'Ending date time is required' })
  @IsDate({ message: 'Invalid ending date time' })
  @Transform(({ value }) => value && new Date(value))
  @MinDate(new Date(), {
    message: 'Ending date time must be greater than now',
  })
  endingDateTime: Date;

  @IsNotEmpty({ message: 'Number of seat is required' })
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'Invalid number of seats' },
  )
  @Min(1, { message: 'Number of seats must be greater than 0' })
  totalSeat: number;

  @IsNotEmpty({ message: 'Price is required' })
  @Min(0, { message: 'Price must be greater than 0' })
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'Invalid price' },
  )
  price: number;

  @IsNotEmpty({ message: 'Itinerary is required' })
  itineraryUrl: string;

  @IsNotEmpty({ message: 'Tolls is required' })
  hasTolls: boolean;

  @IsNotEmpty({ message: 'Trip is required' })
  trip: Trip;
}
