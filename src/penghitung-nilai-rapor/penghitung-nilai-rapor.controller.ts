import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PenghitungNilaiRaporService } from './penghitung-nilai-rapor.service.js';
import { nilaiDto } from './dto/nilai.dto.js';

@Controller('nilai')
export class PenghitungNilaiRaporController {
  constructor(private readonly penghitungNilaiRaporService: PenghitungNilaiRaporService) {}

  @Post('hitung')
  @HttpCode(200)
  hitungRapor(@Body() dto: nilaiDto){
    return this.penghitungNilaiRaporService.hitungRapor(dto);
  }
}
