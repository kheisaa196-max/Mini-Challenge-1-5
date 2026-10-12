import { Controller,Post, Param, Query, Body} from '@nestjs/common';
import { KasirTokoService } from './kasir-toko.service.js';
import { itemDto } from './dto/checkout.dto.js';

@Controller('kasir')
export class KasirTokoController {
  constructor(private readonly kasirTokoService: KasirTokoService) {}

  @Post('checkout/:member')
  checkout(@Param('member') member: string, @Query('metode') metode: string, @Body() body: {items: itemDto[]}){
    this.kasirTokoService.validasiItems(body.items);

    return this.kasirTokoService.hitungTotal(member, metode, body.items)
  }
}
