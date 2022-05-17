import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish'
import { DISHES  } from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Promise<Dish[]>{
    return new Promise(resolve => {
      //simulate server latency with 2 seconds delay.
      setTimeout(() => resolve(DISHES), 2000);
    });
  }
  getDish(id: number):  Promise<Dish>{
return new Promise(resolve => {
  //simulate server latency with 2 seconds delay.
  setTimeout(() => resolve(DISHES.filter((Dish) => {Dish.Id===id.toString()}) [0]));
  });
  }
  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]),2000);
    });
    }
  }