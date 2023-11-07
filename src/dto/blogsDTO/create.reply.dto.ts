import { IsString, MaxLength, IsNotEmpty, IsDateString } from 'class-validator';
export class CreateReplyDto {
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
  @IsDateString()
  readonly date: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  readonly image: string;
}
