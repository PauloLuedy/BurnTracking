import { Module } from '@nestjs/common';
import { FireModule } from './modules/fire.module';

@Module({
  imports: [FireModule],
})
export class AppModule {}
