import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../models/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { }

  public url:string  = "https://fakestoreapi.com/products";

  private _product:Product[]=[];

  public productos(){
    return this._product;
  }

  public getAllProductos():Observable<any>{

    return this.http.get<Product>(this.url)
  }

  public getSpecificProduct(id:string):Observable<Product>{
    return this.http.get<Product>(this.url+"/"+id)
  }

  public getProductOfSpecificCategory(category:string):Observable<Product>{
    return this.http.get<Product>(this.url+"/category/"+category)
  }

  public createProduct(data:FormData):Observable<Product>{
    return this.http.post<Product>(this.url,data);
  }

  public updateProduc(id:string|any,data:FormData):Observable<Product>{
    return this.http.put<Product>(this.url+"/"+id,data)
  }

  public patchProduct(id:string,data:FormData){
    return this.http.patch<Product>(this.url+"/"+id,data)
  }

  public deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(this.url+"/"+id)
  }
}
