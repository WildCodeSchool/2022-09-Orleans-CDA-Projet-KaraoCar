import { Test, TestingModule } from '@nestjs/testing';
import { MusicalStylesController } from './musical-styles.controller';
import { MusicalStylesService } from './musical-styles.service';

describe('MusicalStylesController', () => {
  let controller: MusicalStylesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicalStylesController],
      providers: [MusicalStylesService],
    }).compile();

    controller = module.get<MusicalStylesController>(MusicalStylesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
