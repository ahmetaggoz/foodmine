import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return [
      {
        id:1,
        name: 'Makarna Sezar',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'assets/images/foods/food-1.jpg',
        tags: ['Fast Food', 'Pasta', 'Lunch']
      },
      {
        id:2,
        name: 'Makarna Lao',
        cookTime: '10-20',
        price: 13,
        favorite: false,
        origins: ['China'],
        stars: 4.6,
        imageUrl: 'assets/images/foods/food-2.jpg',
        tags: ['Fast Food', 'Pasta', 'China']
      },
      {
        id:3,
        name: 'Paradise Land',
        cookTime: '15-20',
        price: 16,
        favorite: true,
        origins:['France'],
        stars:4.7,
        imageUrl:'assets/images/foods/food-3.jpg',
        tags: ['Dessert', 'Sweet']
      }, 
      {
        id:4,
        name: 'Cheef Hamburger',
        cookTime: '5-15',
        price:20,
        favorite: false,
        origins:['Turkey'],
        stars:4.3,
        imageUrl:'assets/images/foods/food-4.jpg',
        tags: ['Fast Food', 'Menu']
      },
      {
        id:5,
        name: 'Oreo Lare',
        cookTime:'17-19',
        price:12,
        favorite:false,
        origins: ['Canada'],
        stars: 4.9,
        imageUrl:'assets/images/foods/food-5.jpg',
        tags:['Sweety', 'Star']
      },
      {
        id:6,
        name: 'Vageterian Salata',
        cookTime:'10-15',
        price:9,
        favorite:false,
        origins: ['Japan'],
        stars: 4.1,
        imageUrl:'assets/images/foods/food-6.jpg',
        tags:['Salata', 'Sezar']
      }
    ]
  }
}
