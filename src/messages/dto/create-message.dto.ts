import { IsNotEmpty, IsString, Matches, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMessageDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, { 
    message: 'Phone number must be valid (e.g., 1234567890 or +1 1234567890)' 
  })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  message: string;
  
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  time?: Date;
} 