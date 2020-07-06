import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ServerResponse, ProductModelServer } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) {
  }

  ngOnInit() {
    this.productService.getAllProducts(8).subscribe((prods: ServerResponse ) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }

  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
  }

  selectProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }
}
