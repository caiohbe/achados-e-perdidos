import { Injectable } from '@nestjs/common';
import { CreateLocaisDto } from './dto/create-locai.dto';
import { UpdateLocaisDto } from './dto/update-locai.dto';
import { LocaisRepository } from './locais.repository';

@Injectable()
export class LocaisService {
  constructor(private readonly locaisRepository: LocaisRepository) {}

  create(createLocaisDto: CreateLocaisDto) {
    return this.locaisRepository.create(createLocaisDto);
  }

  findAll() {
    return this.locaisRepository.findAll();
  }

  findOne(nome: string) {
    return this.locaisRepository.findOne(nome);
  }

  update(id: number, updateLocaiDto: UpdateLocaisDto) {
    return this.locaisRepository.update(id, updateLocaiDto);
  }

  remove(id: number) {
    return this.locaisRepository.remove(id);
  }
}
