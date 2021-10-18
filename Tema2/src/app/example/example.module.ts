import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { Module1Module } from './module1/module1.module';



@NgModule({
  declarations: [
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    Module1Module
  ],
  exports: [
    FirstComponentComponent,
    SecondComponentComponent
  ]
})
export class ExampleModule { }
