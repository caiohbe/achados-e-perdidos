import { Injectable } from '@nestjs/common';
import handlePrismaError from 'src/common/errors/prisma-error.handler';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    try {
      return await this.prisma.achado.findMany();
    } catch (error) {
      handlePrismaError(error);
    }
  }
}
