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

}
