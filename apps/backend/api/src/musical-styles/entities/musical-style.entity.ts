import { Trip } from '../../trips/entities/trip.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MusicalStyle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @ManyToMany(() => Trip, (trip: Trip) => trip.musicalStyles)
  trips: Trip[];
}
