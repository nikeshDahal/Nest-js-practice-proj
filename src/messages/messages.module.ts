import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';
@Module({
  controllers: [MessagesController],
  providers:[MessagesService,MessagesRepository]//things that can be used as dependencies for othetr classes 
})
export class MessagesModule {}
