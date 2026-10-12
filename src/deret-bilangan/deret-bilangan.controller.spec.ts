import { Test, TestingModule } from '@nestjs/testing';
import { DeretBilanganController } from './deret-bilangan.controller.js';
import { DeretBilanganService } from './deret-bilangan.service.js';

describe('DeretBilanganController', () => {
  let controller: DeretBilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeretBilanganController],
      providers: [DeretBilanganService],
    }).compile();

    controller = module.get<DeretBilanganController>(DeretBilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
