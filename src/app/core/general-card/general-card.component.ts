import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromCircle } from 'ol/geom/Polygon';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.css']
})
export class GeneralCardComponent implements OnInit {

  public imageUrl:string=''
  public editInfo:boolean=false;
  @Input() product:Product|any= new Product('any','Nuevo Producto',0,'Nuevo','','')

  public productoFormulario:FormGroup = new FormGroup({
    image:new FormControl([],[Validators.required]),
    title:new FormControl('',[Validators.required,Validators.maxLength(90)]),
    price:new FormControl(0,[Validators.required,Validators.maxLength(9)]),
    description:new FormControl('',[Validators.required,Validators.maxLength(500)]),
    category:new FormControl('',[Validators.required,Validators.maxLength(80)])
  })
  
  constructor(public productos:ProductService,private modalService: NgbModal) {}
  
  ngOnInit(): void {
    Object.keys(this.productoFormulario.value).forEach((element:string)=>{
      this.productoFormulario.controls[element].setValue(this.product[element])
    })
  }

  /**
   * Pre renderizamos las imagenes incertadas en el input de imagen
   * para poder ver el archivo seleccionado
   */
  public showPreviewImage(event:any){
    const file = event.target.files[0];
    this.productoFormulario.patchValue({
      Image:file
    });
    this.productoFormulario.controls['image'].updateValueAndValidity()
    const reader = new FileReader();
    reader.onload = () =>{
      this.imageUrl = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  /**
   * Controlamos visibilidad del formulario a la hora de actualizar
   */
  public setInfo(){
    this.editInfo = this.editInfo?false:true
  }

  /**
   * Calculamos precio de producto con descuento
   */
  public precioConDescuento(value:number){
    return Math.round(value*.8)
  }

  /**
   * Gestiona la apertura de menus de informacion
   */
	public open(content:any,size:string) {
		this.modalService.open(content,{ size:size})
  }

  /**
   * Consumimos servicio para crear nuevo producto
   */
  public create(){
    let nuevoproduct:Product = this.productoFormulario.value
    nuevoproduct.id=this.productos.productos().length+''
    this.productos.createProduct(nuevoproduct)
  } 
  
  /**
   * Consumimos servicio para actualizar la informacion del producto
   */
  public update(){
    let nuevoproduct:Product = this.productoFormulario.value
    nuevoproduct.id=this.product.id
    this.productos.updateProduc(this.product.id,nuevoproduct)
  }

  public patch(){
    let nuevoProducto:Product = this.productoFormulario.value;
    nuevoProducto.id = this.product.id
    this.productos.patchProduct(this.product.id,nuevoProducto)
  }

  /**
   * Consumimos servicio para eliminar el producto
   */
  public delete(){
    this.productos.deleteProduct(this.product.id)
  }
}