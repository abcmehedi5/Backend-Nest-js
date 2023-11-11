import { Optional } from '@nestjs/common';
import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsDateString,
  IsEmail,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly displayName: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  readonly image: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly phoneNumber: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @IsDateString()
  readonly date: string;

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly role: string;

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly status: string;

  @IsString()
  @MaxLength(500)
  @Optional()
  readonly bio: string;

  @IsString()
  @MaxLength(30)
  @Optional()
  readonly birthday: string;


  @IsString()
  @MaxLength(15)
  @Optional()
  readonly gender: string;
}
