export class CreateTripSliceDto {
  startingPoint: string;
  endingPoint: string;
  startingDateTime: Date;
  endingDateTime: Date;
  totalSeat: number;
  price: number;
  itineraryUrl: string;
  hasTolls: boolean;
}
