import { Test, TestingModule } from '@nestjs/testing';
import { PenghitungNilaiRaporController } from './penghitung-nilai-rapor.controller.js';
import { PenghitungNilaiRaporService } from './penghitung-nilai-rapor.service.js';

describe('PenghitungNilaiRaporController', () => {
  let controller: PenghitungNilaiRaporController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenghitungNilaiRaporController],
      providers: [PenghitungNilaiRaporService],
    }).compile();

    controller = module.get<PenghitungNilaiRaporController>(PenghitungNilaiRaporController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
