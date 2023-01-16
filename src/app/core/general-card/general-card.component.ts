import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.css']
})
export class GeneralCardComponent implements OnInit {

  @Input() title !:string ;
  @Input() description !:string ;
  @Input() img !:string ;
  @Input() category !:string ;

  constructor() { }

  ngOnInit(): void {
  }

}
