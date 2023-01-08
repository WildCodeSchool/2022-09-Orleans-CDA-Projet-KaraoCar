import { Transform } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { User } from 'src/entities/user.entity';

export class CreateMessageDto {
  @IsDate({ message: 'Invalid starting date time' })
  @Transform(({ value }) => value && new Date(value))
  sendAt: Date;

  @IsString({ message: 'Invalid message' })
  @MaxLength(65535)
  content: string;

  @IsInt({ message: 'Invalid sender' })
  sender: User;

  @IsInt({ message: 'Invalid receiver' })
  receiver: User;

  @IsOptional()
  @IsDate({ message: 'Invalid read date time' })
  @Transform(({ value }) => value && new Date(value))
  readAt: Date | null;
}
