import { Test, TestingModule } from '@nestjs/testing';
import { TripSlicesService } from './trip-slices.service';

describe('TripSlicesService', () => {
  let service: TripSlicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripSlicesService],
    }).compile();

    service = module.get<TripSlicesService>(TripSlicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
