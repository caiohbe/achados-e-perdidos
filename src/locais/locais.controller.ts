import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { LocaisService } from './locais.service';
import { CreateLocaisDto } from './dto/create-locai.dto';
import { UpdateLocaisDto } from './dto/update-locai.dto';

@Controller('locais')
export class LocaisController {
  constructor(private readonly locaisService: LocaisService) {}

  @Post()
  create(@Body(ValidationPipe) createLocaisDto: CreateLocaisDto) {
    return this.locaisService.create(createLocaisDto);
  }

  @Get()
  findAll(@Query('search') search?: string) {
    return this.locaisService.findAll({ search });
  }

  @Get(':nome')
  findOne(@Param('nome') nome: string) {
    return this.locaisService.findOne(nome);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateLocaiDto: UpdateLocaisDto,
  ) {
    return this.locaisService.update(+id, updateLocaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locaisService.remove(+id);
  }
}
