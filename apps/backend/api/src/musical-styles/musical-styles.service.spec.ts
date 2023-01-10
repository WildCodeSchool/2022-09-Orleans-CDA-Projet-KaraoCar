import { Test, TestingModule } from '@nestjs/testing';
import { MusicalStylesService } from './musical-styles.service';

describe('MusicalStylesService', () => {
  let service: MusicalStylesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicalStylesService],
    }).compile();

    service = module.get<MusicalStylesService>(MusicalStylesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
