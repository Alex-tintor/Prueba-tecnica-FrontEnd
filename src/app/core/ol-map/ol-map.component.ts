import { Component, ElementRef,Input, OnInit } from '@angular/core';
import  Map from 'ol/Map';
import  View  from 'ol/View';
import  TileLayer  from 'ol/layer/Tile';
import * as Proj from 'ol/proj';
import {defaults as defaultControls} from 'ol/control';
import XYZ from 'ol/source/XYZ';

export const DEFAULT_HEIGTH = '500px' ;
export const DEFAULT_WIDTH = '500px'

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {

  @Input() lat : number|any;
  @Input() lon : number|any;
  @Input() zoom : number|any;
  @Input() width : string | number = DEFAULT_WIDTH;
  @Input() heigth: string | number = DEFAULT_HEIGTH;

  private map :Map|any;

  private mapEl:HTMLElement|any;

  constructor(private elementRef : ElementRef) { }

  ngOnInit(): void {

    this.mapEl = this.elementRef.nativeElement.querySelector('#map');
    this.setSize();
  }

  ngAfterViewInit(): void {
      this.map = new Map({
        target: 'map',
        layers:[
          new TileLayer({
            source: new XYZ({
              url: 'https://{a-c}.title.openstreetmap.org/{z}/{x}/{y}.png'
            })
          })
        ],
        view: new View({
          center: Proj.fromLonLat([this.lon,this.lat]),
          zoom:this.zoom
        }),
        controls: defaultControls().extend([])
      })
  }

  private setSize():void{
    if(this.mapEl){
      const styles = this.mapEl.style;
      styles.heigth = coerceCssPixelValue(this.heigth) || DEFAULT_HEIGTH;
      styles.width = coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }

}

const cssUnitsPattern = /([A-Za-z%]+)$/;

function coerceCssPixelValue(value:any):string{
    if(value == null)
      return '';
    return cssUnitsPattern.test(value ) ? value : `${value}px`;
}