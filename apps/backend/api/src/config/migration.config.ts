import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { MusicalStyle } from '../musical-styles/entities/musical-style.entity';
import { TripSlice } from '../trip-slices/entities/trip-slice.entity';
import { Trip } from '../trips/entities/trip.entity';
import { DataSource } from 'typeorm';

config();
const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get('DATABASE_HOST'),
  port: +configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  synchronize: /true/.test(configService.get('DATABASE_SYNCHRONIZE')),
  entities: [Trip, TripSlice, MusicalStyle],
  migrations: [__dirname + '/../migrations/*.ts'],
});
