import { IsEnum, IsOptional, IsString, Matches } from 'class-validator';

export class UpdateMessageDto {
  @IsOptional()
  @IsString()
  @Matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, { 
    message: 'Phone number must be valid (e.g., 1234567890 or +1 1234567890)'
  })
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsEnum(['pending', 'sent', 'failed'])
  status?: 'pending' | 'sent' | 'failed';
} 