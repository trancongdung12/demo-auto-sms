import { Controller, Post, Body } from '@nestjs/common';
import { MessagesService } from '../messages/messages.service';
import { CreateMessageDto } from '../messages/dto/create-message.dto';
import { Message } from '../messages/entities/message.entity';

@Controller('sms-verify')
export class SmsVerifyController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messagesService.create(createMessageDto);
  }
} 