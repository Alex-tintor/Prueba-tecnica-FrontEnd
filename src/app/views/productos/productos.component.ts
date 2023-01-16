import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public productos:ProductService) { }

  ngOnInit(): void {

  }

  public precioConDescuento(value:number){
    return Math.round(value*.8)
  }

}
