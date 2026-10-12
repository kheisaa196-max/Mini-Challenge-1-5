import { Module } from '@nestjs/common';
import { KasirTokoService } from './kasir-toko.service.js';
import { KasirTokoController } from './kasir-toko.controller.js';

@Module({
  controllers: [KasirTokoController],
  providers: [KasirTokoService],
})
export class KasirTokoModule {}
