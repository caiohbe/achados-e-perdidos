import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LocaisModule } from './locais/locais.module';

@Module({
  imports: [UsersModule, LocaisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
