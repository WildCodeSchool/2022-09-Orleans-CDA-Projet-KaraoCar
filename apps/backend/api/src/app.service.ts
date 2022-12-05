import { Injectable } from '@nestjs/common';
import { SomeInterface } from '@libs/typings';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }

  getSomeRoute(): SomeInterface {
    return {
      someProperty: '🚀',
    };
  }
}
