import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';

@Controller('authorization')
export class AuthorizationController {
  
  @Get()
  authorize(@Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key'];
    const secretKey = headers['secret-key'];

    if (apiKey === 'october' && secretKey === 'october') {
      return { success: true, message: 'Login successful' };
    } else {
      throw new UnauthorizedException('Invalid API key or secret key');
    }
  }
} 