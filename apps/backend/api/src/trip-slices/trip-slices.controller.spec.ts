import { Test, TestingModule } from '@nestjs/testing';
import { TripSlicesController } from './trip-slices.controller';
import { TripSlicesService } from './trip-slices.service';

describe('TripSlicesController', () => {
  let controller: TripSlicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripSlicesController],
      providers: [TripSlicesService],
    }).compile();

    controller = module.get<TripSlicesController>(TripSlicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
