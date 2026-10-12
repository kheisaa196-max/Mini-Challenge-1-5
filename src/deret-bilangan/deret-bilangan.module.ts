import { Module } from '@nestjs/common';
import { DeretBilanganService } from './deret-bilangan.service.js';
import { DeretBilanganController } from './deret-bilangan.controller.js';

@Module({
  controllers: [DeretBilanganController],
  providers: [DeretBilanganService],
})
export class DeretBilanganModule {}
