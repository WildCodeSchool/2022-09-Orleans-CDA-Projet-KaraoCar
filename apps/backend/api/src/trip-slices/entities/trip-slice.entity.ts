import { Trip } from 'src/trips/entities/trip.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TripSlice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startingPoint: string;

  @Column()
  startingPointLat: number;

  @Column()
  startingPointLng: number;

  @Column()
  endingPoint: string;

  @Column()
  endingPointLat: number;

  @Column()
  endingPointLng: number;

  @Column()
  startingDateTime: Date;

  @Column()
  endingDateTime: Date;

  @Column()
  totalSeat: number;

  @Column()
  price: number;

  @Column()
  itineraryUrl: string;

  @Column()
  hasTolls: boolean;

  @ManyToOne(() => Trip, (trip: Trip) => trip.tripSlices)
  @JoinColumn()
  trip: Trip;
}
