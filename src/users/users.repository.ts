import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import handlePrismaError from 'src/common/errors/prisma-error.handler';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({ nome, email, cpf }: CreateUserDto) {
    try {
      await this.prisma.user.create({
        data: { nome, email, cpf },
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findOne(cpf: string): Promise<User> {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: {
          cpf,
        },
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return this.prisma.user.update({ data: updateUserDto, where: { id } });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}
