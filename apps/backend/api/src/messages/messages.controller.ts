import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Patch('mark-as-read/:receiverId/:senderId')
  markAsRead(
    @Param('receiverId') receiverId: string,
    @Param('senderId') senderId: string,
  ) {
    return this.messagesService.markAsRead(+receiverId, +senderId);
  }

  @Get('conversations/:id')
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
