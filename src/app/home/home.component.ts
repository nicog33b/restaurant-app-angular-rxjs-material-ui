import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { PROMOTIONS } from '../shared/promotions';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  leader!:Leader;
  dish!: Dish;
  promotion!: Promotion;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderservice: LeaderService) { }
    

  ngOnInit() {
    //acordate de hacer el git commit -m "Promise Part 1"
this.leaderservice.getFeaturedLeader().then(LEADERS => this.leader = LEADERS);
this.dishservice.getFeaturedDish().then(dishes => this.dish = dishes);
this.promotionservice.getFeaturedPromotion().then(PROMOTIONS => this.promotion = PROMOTIONS);

  }

}