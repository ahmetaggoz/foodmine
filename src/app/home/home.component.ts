import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component"; 


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, SearchComponent]
})
export class HomeComponent {
  foods:Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) {
    
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else 
      this.foods = foodService.getAll();

    });

  }

}
