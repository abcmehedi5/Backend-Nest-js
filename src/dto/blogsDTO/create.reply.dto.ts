import { IsString, MaxLength, IsNotEmpty, IsDateString } from 'class-validator';
export class createReplyDto {
  @IsString()
  @IsNotEmpty()
  readonly text: string;

  @IsString()
  @MaxLength(1000)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly date: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  @IsDateString()
  readonly image: string;
}
