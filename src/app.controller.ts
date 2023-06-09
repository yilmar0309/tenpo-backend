import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('restaurants')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get-all')
  getAllRestaurants() {
    return this.appService.getAllRestaurants();
  }

  @Get('get-by-id/:id')
  getRestaurantById(@Param() param) {
    return this.appService.getRestaurantById(param.id);
  }

  @Get('get-all-favorites')
  getFavorites() {
    return this.appService.getFavorites();
  }

  @Get('get-all-categories')
  getAllCategories() {
    return this.appService.getAllCategories();
  }
}
