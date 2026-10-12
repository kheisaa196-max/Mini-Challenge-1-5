import { Controller, Get, Query } from '@nestjs/common';
import { KonversiSuhuService } from './konversi-suhu.service.js';
import { konversiDto } from './dto/konversi.suhu.dto.js';

@Controller('suhu')
export class KonversiSuhuController {
  constructor(private readonly konversiSuhuService: KonversiSuhuService) {}

  @Get('konversi')
  getkonversiSuhu(@Query() query: konversiDto){
    return this.konversiSuhuService.konversiSuhu(query);
  }
}
