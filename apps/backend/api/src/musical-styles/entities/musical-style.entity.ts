import { Trip } from 'src/trips/entities/trip.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MusicalStyle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Trip, (trip: Trip) => trip.musicalStyles, {
    cascade: ['insert', 'update'],
  })
  trips: Trip[];
}
