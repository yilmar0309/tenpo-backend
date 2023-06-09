import { Injectable } from '@nestjs/common';
import { dataCategories, dataRestaurants } from './restaurants';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getAllRestaurants() {
    return dataRestaurants;
  }

  async getRestaurantById(id: string) {
    return dataRestaurants.find((e) => e.id === parseInt(id));
  }

  async getFavorites() {
    return dataRestaurants.slice(0, 2);
  }

  async getAllCategories() {
    return dataCategories;
  }
}
