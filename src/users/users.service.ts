import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto): Promise<void> {
    return this.usersRepository.create(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  findOne(cpf: string): Promise<User> {
    return this.usersRepository.findOne(cpf);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number): Promise<void> {
    return this.usersRepository.remove(id);
  }
}
