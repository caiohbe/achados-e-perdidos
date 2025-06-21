import { Injectable } from '@nestjs/common';
import { CreateLocaisDto } from './dto/create-locai.dto';
import { UpdateLocaisDto } from './dto/update-locai.dto';

@Injectable()
export class LocaisService {
  create(createLocaiDto: CreateLocaisDto) {
    return 'This action adds a new locai';
  }

  findAll() {
    return `This action returns all locais`;
  }

  findOne(nome: string) {
    return `This action returns a #${nome} locai`;
  }

  update(id: number, updateLocaiDto: UpdateLocaisDto) {
    return `This action updates a #${id} locai`;
  }

  remove(id: number) {
    return `This action removes a #${id} locai`;
  }
}
