import { Test, TestingModule } from '@nestjs/testing';
import { DeretBilanganService } from './deret-bilangan.service.js';

describe('DeretBilanganService', () => {
  let service: DeretBilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeretBilanganService],
    }).compile();

    service = module.get<DeretBilanganService>(DeretBilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
