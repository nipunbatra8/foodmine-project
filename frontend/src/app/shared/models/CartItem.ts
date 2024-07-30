import { Food } from "./Food";

export class CartItem{
  constructor(food:Food){
    this.food = food;
   }
  food!:Food;
  quantity:number = 1 ;
  price:number = this.food.price;
}