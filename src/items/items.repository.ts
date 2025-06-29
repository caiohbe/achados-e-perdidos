import { Injectable } from '@nestjs/common';
import handlePrismaError from 'src/common/errors/prisma-error.handler';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(search?: string) {
    try {
      return await this.prisma.achado.findMany({
        where: search ? { item: { startsWith: search } } : {},
        include: { usuario_devolvido: true, local_encontrado: true },
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}
