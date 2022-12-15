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

  @Column({ default: 0 })
  startingPointLat: number;

  @Column({ default: 0 })
  startingPointLng: number;

  @Column()
  endingPoint: string;

  @Column({ default: 0 })
  endingPointLat: number;

  @Column({ default: 0 })
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

  @ManyToOne(() => Trip, (trip: Trip) => trip.tripSlices, { cascade: true })
  @JoinColumn()
  trip: Trip;
}
