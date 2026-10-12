import { Test, TestingModule } from '@nestjs/testing';
import { KasirTokoController } from './kasir-toko.controller.js';
import { KasirTokoService } from './kasir-toko.service.js';

describe('KasirTokoController', () => {
  let controller: KasirTokoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KasirTokoController],
      providers: [KasirTokoService],
    }).compile();

    controller = module.get<KasirTokoController>(KasirTokoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
