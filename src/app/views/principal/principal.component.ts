import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product} from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public products:Product[];

  constructor(private productService:ProductService,public route:Router) { 
    this.products = productService.productos()
  }
  ngOnInit(): void {
    this.productService.getAllProductos().subscribe(
      req => this.products = req.content
    );
  }

}
