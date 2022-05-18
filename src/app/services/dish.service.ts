import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish'
import { DISHES  } from '../shared/dishes';
import {of, Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.Id.toString === id.toString))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
  }