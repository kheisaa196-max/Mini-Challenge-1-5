import { Module } from '@nestjs/common';
import { PenghitungNilaiRaporService } from './penghitung-nilai-rapor.service.js';
import { PenghitungNilaiRaporController } from './penghitung-nilai-rapor.controller.js';

@Module({
  controllers: [PenghitungNilaiRaporController],
  providers: [PenghitungNilaiRaporService],
})
export class PenghitungNilaiRaporModule {}
