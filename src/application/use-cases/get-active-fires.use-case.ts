import { Injectable, Inject } from '@nestjs/common';
import { Fire } from '../../domain/entities/fire.entity';
import { FireRepository } from '../../domain/repositories/fire.repository';

@Injectable()
export class GetActiveFiresUseCase {
  constructor(
    @Inject('FireRepository') private readonly fireRepository: FireRepository,
  ) {}

  async execute(): Promise<Fire[]> {
    return this.fireRepository.getActiveFires();
  }
}
