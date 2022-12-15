import { TripSlice } from 'src/trip-slices/entities/trip-slice.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carId: number;

  @Column()
  middleseat: boolean;

  @Column()
  musicId: number;

  @Column()
  comment: string;

  @OneToMany(() => TripSlice, (tripSlice: TripSlice) => tripSlice.trip)
  tripSlices: TripSlice[];
}
