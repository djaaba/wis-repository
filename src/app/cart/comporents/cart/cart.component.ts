import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product-list/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemsCart = this.productService.getItemsCart();
  itemsCart1 = this.productService.itemsCart1;

  constructor(
    public productService: ProductService
    ) { }

  ngOnInit(): void {
  }

  getNumber(value: any){
    return this.productService.getNiceNum(value) + " руб";
  }

  // get price(): string {
  //   let sum = this.productService.itemsCart.reduce(function (accumuator, currentValue) {
  //     return accumuator + currentValue.price * currentValue.counter;
  //   }, 0)
  //   return String(sum).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + " руб"
  // }
}
