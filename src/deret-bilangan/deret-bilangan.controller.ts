import { Controller, Get, Param, Query } from '@nestjs/common';
import { DeretBilanganService } from './deret-bilangan.service.js';
import { deretDto, urutan } from './dto/deret.bilangan.dto.js';

@Controller('deret')
export class DeretBilanganController {
  constructor(private readonly deretBilanganService: DeretBilanganService) {}

  @Get(':jenis')
  getgenerateDeret(@Param('jenis') jenis: string, @Query() query: deretDto ){
    return this.deretBilanganService.generateDeret(jenis, query)
  }
}
