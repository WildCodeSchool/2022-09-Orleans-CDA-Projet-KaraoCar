import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Trip } from './trips/entities/trip.entity';
import { TripsModule } from './trips/trips.module';
import { TripSlicesModule } from './trip-slices/trip-slices.module';
import { TripSlice } from './trip-slices/entities/trip-slice.entity';
import { MusicalStylesModule } from './musical-styles/musical-styles.module';
import { MusicalStyle } from './musical-styles/entities/musical-style.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        synchronize: /true/.test(configService.get('DATABASE_SYNCHRONIZE')),
        entities: [Trip, TripSlice, MusicalStyle],
      }),
      inject: [ConfigService],
    }),
    TripsModule,
    TripSlicesModule,
    MusicalStylesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
