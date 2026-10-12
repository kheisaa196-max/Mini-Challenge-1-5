import { Controller, Get, Param } from '@nestjs/common';
import { BilanganService } from './bilangan.service.js';
import { angkaDto } from './dto/cek.bilangan.dto.js';

@Controller('bilangan')
export class BilanganController {
  constructor(private readonly bilanganService: BilanganService) {}

  @Get(':angka')
  getBilangan(@Param('angka') angka: string){
    return this.bilanganService.getBilangan(Number(angka));
  }
}
