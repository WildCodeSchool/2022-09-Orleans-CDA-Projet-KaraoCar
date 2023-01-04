import { MusicalStyle } from 'src/musical-styles/entities/musical-style.entity';
import { TripSlice } from 'src/trip-slices/entities/trip-slice.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carId: number;

  @Column()
  middleseat: boolean;

  @ManyToMany(
    () => MusicalStyle,
    (musicalStyle: MusicalStyle) => musicalStyle.trips,
    { cascade: ['insert', 'update'] },
  )
  @JoinTable({
    name: 'trip_musical_style',
    joinColumn: { name: 'tripId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'musicalStyleId', referencedColumnName: 'id' },
  })
  musicalStyles: MusicalStyle[];

  @Column('text')
  comment: string;

  @OneToMany(() => TripSlice, (tripSlice: TripSlice) => tripSlice.trip)
  tripSlices: TripSlice[];
}
