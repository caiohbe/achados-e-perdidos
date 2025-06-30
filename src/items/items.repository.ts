import { Injectable } from '@nestjs/common';
import handlePrismaError from 'src/common/errors/prisma-error.handler';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ItemsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(where: Prisma.ItemWhereInput) {
    try {
      return this.prisma.item.findMany({
        where,
        include: { local_encontrado: true, usuario_devolvido: true },
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}
