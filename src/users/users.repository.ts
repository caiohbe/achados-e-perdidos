import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({ nome, email, cpf }: CreateUserDto) {
    return this.prisma.user.create({
      data: { nome, email, cpf },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(cpf: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        cpf,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ data: updateUserDto, where: { id } });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
