import { Fire } from '../entities/fire.entity';

export interface FireRepository {
  getActiveFires(): Promise<Fire[]>;
}
