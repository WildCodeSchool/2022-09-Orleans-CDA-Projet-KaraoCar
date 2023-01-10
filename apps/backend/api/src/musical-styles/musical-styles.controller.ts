import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MusicalStylesService } from './musical-styles.service';
import { CreateMusicalStyleDto } from './dto/create-musical-style.dto';
import { UpdateMusicalStyleDto } from './dto/update-musical-style.dto';

@Controller('musical-styles')
export class MusicalStylesController {
  constructor(private readonly musicalStylesService: MusicalStylesService) {}

  @Post()
  create(@Body() createMusicalStyleDto: CreateMusicalStyleDto) {
    return this.musicalStylesService.create(createMusicalStyleDto);
  }

  @Get()
  findAll() {
    return this.musicalStylesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicalStylesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMusicalStyleDto: UpdateMusicalStyleDto,
  ) {
    return this.musicalStylesService.update(+id, updateMusicalStyleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicalStylesService.remove(+id);
  }
}
