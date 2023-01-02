import { MusicalStyle } from 'src/musical-styles/entities/musical-style.entity';

export class CreateTripDto {
  carId: number;
  middleseat: boolean;
  musicalStyles: MusicalStyle[];
  comment: string;
}
