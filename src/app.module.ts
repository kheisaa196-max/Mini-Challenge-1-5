import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BilanganModule } from './bilangan/bilangan.module.js';
import { KonversiSuhuModule } from './konversi-suhu/konversi-suhu.module.js';
import { DeretBilanganModule } from './deret-bilangan/deret-bilangan.module.js';
import { PenghitungNilaiRaporModule } from './penghitung-nilai-rapor/penghitung-nilai-rapor.module.js';
import { KasirTokoModule } from './kasir-toko/kasir-toko.module.js';

@Module({
  imports: [BilanganModule, KonversiSuhuModule, DeretBilanganModule, PenghitungNilaiRaporModule, KasirTokoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
