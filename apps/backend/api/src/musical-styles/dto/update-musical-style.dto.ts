import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicalStyleDto } from './create-musical-style.dto';

export class UpdateMusicalStyleDto extends PartialType(CreateMusicalStyleDto) {}
