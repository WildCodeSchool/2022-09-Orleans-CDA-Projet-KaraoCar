import { Trip } from '../../trips/entities/trip.entity';
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

  @Column({
    length: 255,
  })
  startingPoint: string;

  @Column({ default: 0 })
  startingPointLat: number;

  @Column({ default: 0 })
  startingPointLng: number;

  @Column({
    length: 255,
  })
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

  @Column('text')
  itineraryUrl: string;

  @Column()
  hasTolls: boolean;

  @ManyToOne(() => Trip, (trip: Trip) => trip.tripSlices, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  trip: Trip;
}
