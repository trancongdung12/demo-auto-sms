import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  sender: string;

  @IsNotEmpty()
  @IsString()
  message: string;
  
  @IsOptional()
  @IsNumber()
  time?: number;
} 