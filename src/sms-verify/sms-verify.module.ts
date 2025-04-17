import { Module } from '@nestjs/common';
import { SmsVerifyController } from './sms-verify.controller';
import { MessagesModule } from '../messages/messages.module';

@Module({
  imports: [MessagesModule],
  controllers: [SmsVerifyController],
})
export class SmsVerifyModule {} 