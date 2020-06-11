import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HomeRountingModule} from './home-rounting.module';
import {  HomeComponent  } from './home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRountingModule
  ],
  exports:[
    HomeRountingModule
  ]
})
export class HomeModule { }
