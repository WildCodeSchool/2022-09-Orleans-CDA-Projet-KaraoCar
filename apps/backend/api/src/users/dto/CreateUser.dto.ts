import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  username: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(255)
  password: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(255)
  confirm_password: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsNotEmpty()
  @MaxLength(100)
  firstname: string;

  @IsNotEmpty()
  @MaxLength(100)
  lastname: string;

  description: string;

  photo: string;

  birthdays: Date;

  created_at: Date;

  deleted_at: Date;
}
