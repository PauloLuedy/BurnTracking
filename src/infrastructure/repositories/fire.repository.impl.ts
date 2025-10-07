import { Injectable } from '@nestjs/common';
import { Fire } from '../../domain/entities/fire.entity';
import { FireRepository } from '../../domain/repositories/fire.repository';

@Injectable()
export class FireRepositoryImpl implements FireRepository {
  getActiveFires(): Promise<Fire[]> {
    // Mock data - replace with actual data source
    return Promise.resolve([
      {
        id: '1',
        latitude: -15.7942,
        longitude: -47.8822,
        confidence: 85,
        brightness: 320.5,
        detectedAt: new Date(),
        isActive: true,
      },
    ]);
  }
}
