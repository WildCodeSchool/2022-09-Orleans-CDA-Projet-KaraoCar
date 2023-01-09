import { IsArray, IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { MusicalStyle } from 'src/entities/musical-style.entity';

export class CreateTripDto {
  @IsNotEmpty()
  @IsNumber()
  carId: number;

  @IsNotEmpty()
  @IsBoolean()
  middleseat: boolean;

  @IsNotEmpty()
  @IsArray()
  musicalStyles: MusicalStyle[];

  comment: string;
}
