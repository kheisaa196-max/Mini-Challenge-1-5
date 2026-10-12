import { Test, TestingModule } from '@nestjs/testing';
import { PenghitungNilaiRaporService } from './penghitung-nilai-rapor.service.js';

describe('PenghitungNilaiRaporService', () => {
  let service: PenghitungNilaiRaporService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenghitungNilaiRaporService],
    }).compile();

    service = module.get<PenghitungNilaiRaporService>(PenghitungNilaiRaporService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
