import { Test, TestingModule } from '@nestjs/testing';
import { FactsController } from './facts.controller';

describe('Facts Controller', () => {
  let controller: FactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactsController],
    }).compile();

    controller = module.get<FactsController>(FactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
