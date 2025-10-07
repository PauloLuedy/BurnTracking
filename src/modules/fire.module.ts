import { Module } from '@nestjs/common';
import { FireController } from '../presentation/controllers/fire.controller';
import { GetActiveFiresUseCase } from '../application/use-cases/get-active-fires.use-case';
import { FireRepositoryImpl } from '../infrastructure/repositories/fire.repository.impl';

@Module({
  controllers: [FireController],
  providers: [
    GetActiveFiresUseCase,
    {
      provide: 'FireRepository',
      useClass: FireRepositoryImpl,
    },
  ],
})
export class FireModule {}
