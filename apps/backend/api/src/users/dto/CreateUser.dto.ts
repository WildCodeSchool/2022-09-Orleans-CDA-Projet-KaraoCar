import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(10)
  password: string;

  // @IsNotEmpty()
  // @MinLength(10)
  // confirm_password: string;

  @IsNotEmpty()
  @IsEmail()
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
