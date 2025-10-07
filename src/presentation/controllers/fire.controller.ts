import { Controller, Get } from '@nestjs/common';
import { GetActiveFiresUseCase } from '../../application/use-cases/get-active-fires.use-case';
import { Fire } from '../../domain/entities/fire.entity';

@Controller('fires')
export class FireController {
  constructor(private readonly getActiveFiresUseCase: GetActiveFiresUseCase) {}

  @Get('active')
  async getActiveFires(): Promise<Fire[]> {
    return this.getActiveFiresUseCase.execute();
  }
}
