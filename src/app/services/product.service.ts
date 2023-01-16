import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../models/product/product';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
// clase Injectable (servicio) para el consumo de los end points
export class ProductService {

  // constructor con HttpClient inyectado para utilizacion de metodos como get,post,put etc
  constructor(private http:HttpClient ) { 
    // cargamos la informacion que viene desde la api en este caso los productos y categorias
    this.getAllProductos().subscribe(req=> this._product=req)

    this.getAllCategories().subscribe(req => this._categorys = req)
  }
// declaramos los strings que representan la url de los end point a copnsumir
  public url:string  = "https://fakestoreapi.com/products";
  public url2:string = "https://fakestoreapi.com/products/categories"

  // variables de control para manejo de la informacion de entrada
  private _product:Product[]=[];

  private _categorys:string[]=[];

  // metodos para retorno de informacion
  public productos(){
    return this._product;
  }

  public categories(){
    return this._categorys
  }

  // metodo get de array de objetos
  public getAllProductos():Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }

  // metodo get de objeto por id
  public getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(this.url+"/"+id)
  }

// metodo get de objeto por categoria
  public getProductOfSpecificCategory(category:string):Observable<Product>{
    return this.http.get<Product>(this.url+"/category/"+category)
  }

  // metodo post para el objeto de clase
  public createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.url,product);
  }

  // metodo put para el objeto de clase
  public updateProduc(id:string, product:Product):Observable<Product>{
    return this.http.put<Product>(this.url+"/"+id,product)
  }

  // metodo patch para el objeto de clase
  public patchProduct(id:string,product:Product){
    return this.http.patch<Product>(this.url+"/"+id,product)
  }

  // metodo delete para el objeto de clase 
  public deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(this.url+"/"+id)
  }

  // metodo get de aray de objetos
  public getAllCategories():Observable<[]>{
    return this.http.get<[]>(this.url2)
  }
}
