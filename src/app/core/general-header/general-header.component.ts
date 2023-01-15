import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.css']
})
export class GeneralHeaderComponent implements OnInit {

  constructor(public rute:Router) { }

  ngOnInit(): void {
  }

  private _Seccion : string ="";
  @Output() EVentSeccion = new EventEmitter();
  public get Seccion(){return this._Seccion}
  public set Seccion(seccion:string){
    this._Seccion = seccion;
    this.EVentSeccion.emit(this._Seccion)
  }

}
