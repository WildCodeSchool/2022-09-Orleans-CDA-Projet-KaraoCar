import { Module } from '@nestjs/common';
import { MusicalStylesService } from './musical-styles.service';
import { MusicalStylesController } from './musical-styles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicalStyle } from './entities/musical-style.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MusicalStyle])],
  controllers: [MusicalStylesController],
  providers: [MusicalStylesService],
})
export class MusicalStylesModule {}
