import { Exclude } from 'class-transformer';

export interface User {
  id: number;
  firstname: string;
  password: string;
}

export class SerializedUser {
  id: number;
  firstname: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
