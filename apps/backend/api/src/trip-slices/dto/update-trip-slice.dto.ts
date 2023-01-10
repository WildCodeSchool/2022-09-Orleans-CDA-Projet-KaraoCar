import { PartialType } from '@nestjs/mapped-types';
import { CreateTripSliceDto } from './create-trip-slice.dto';

export class UpdateTripSliceDto extends PartialType(CreateTripSliceDto) {}
