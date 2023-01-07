import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  // @Post()
  // create(@Body() createMessageDto: CreateMessageDto) {
  //   return this.messagesService.create(createMessageDto);
  // }

  @Get('/conversations/:id')
  findAllLastMessages(@Param('id') id: string) {
    return this.messagesService.findAllLastMessages(+id);
  }

  @Get(':userId/:chattingWithId')
  findAllConversationMessages(
    @Param('userId') userId: string,
    @Param('chattingWithId') chattingWithId: string,
  ) {
    return this.messagesService.findAllConversationMessages(
      +userId,
      +chattingWithId,
    );
  }
}
