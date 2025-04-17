import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { SmsVerifyModule } from './sms-verify/sms-verify.module';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    MessagesModule,
    AuthorizationModule,
    SmsVerifyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
