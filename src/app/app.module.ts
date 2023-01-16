import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { GeneralCardComponent } from './core/general-card/general-card.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralHeaderComponent } from './core/general-header/general-header.component';
import { MapComponent } from './views/map/map.component';
import { OlMapComponent } from './core/ol-map/ol-map.component';
import { ProductosComponent } from './views/productos/productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    GeneralCardComponent,
    GeneralHeaderComponent,
    MapComponent,
    OlMapComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }