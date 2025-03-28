import { IsEnum, IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateMessageDto {
  @IsOptional()
  @IsString()
  sender?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsEnum(['pending', 'sent', 'failed'])
  status?: 'pending' | 'sent' | 'failed';

  @IsOptional()
  @IsNumber()
  time?: number;
} 