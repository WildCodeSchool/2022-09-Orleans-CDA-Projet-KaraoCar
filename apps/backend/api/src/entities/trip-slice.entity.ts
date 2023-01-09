import { Trip } from './trip.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TripSlice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  startingPoint: string;

  @Column()
  startingPointLat: number;

  @Column()
  startingPointLng: number;

  @Column({
    length: 255,
  })
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

  @Column('text')
  itineraryUrl: string;

  @Column()
  hasTolls: boolean;

  @ManyToOne(() => Trip, (trip: Trip) => trip.tripSlices, {
    cascade: ['insert', 'update'],
  })
  trip: Trip;
}
