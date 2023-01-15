import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public products : Product[]
  public form:FormGroup

  constructor(private productService:ProductService) {
    this.products = productService.productos();
    this.form = new FormGroup({
      image:new FormControl('',[Validators.required])

    })
   }

  ngOnInit(): void {
  this.productService.getAllProductos().subscribe(req => this.products = req.content)
  }

  public isInvalid(control:string):boolean{
    return this.form.controls[control].invalid && ( this.form.controls[control].dirty || this.form.controls[control].touched)
  }

  public getErrors(control:string):string{
    switch(control){
      case 'email':
        return this.getErrorsByControl(control,"Ingresa Correo del Sena o Empresarial","No es un Correo Valido");
      case 'password':
        return this.getErrorsByControl(control,"Contraseña suministrada por Administracion","Debe ser mayor a 8 digitos y menor a 16");
      default:
        return "Ha ocurrido algo insesperado"
    }
  }

  public isFormValid():boolean{
    return this.form.valid;
  }

  private getErrorsByControl(control:string,defecto:string,errores:string):any{
    if(this.isInvalid(control))
      return errores
    return defecto;
  }

  
  
}
