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
  }
  