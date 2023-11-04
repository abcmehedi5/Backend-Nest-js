import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsDateString,
  IsEmail,
} from 'class-validator';
export class CreateBlogDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @MaxLength(500)
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  readonly image: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @IsDateString()
  readonly date: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly author: string;
}
