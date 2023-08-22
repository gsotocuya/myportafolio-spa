import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesRoutingModule} from "@views/pages/pages-routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
   HomeComponent
  ]
})
export class PageModule { }
