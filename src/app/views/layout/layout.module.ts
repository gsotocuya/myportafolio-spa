import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    BaseComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
