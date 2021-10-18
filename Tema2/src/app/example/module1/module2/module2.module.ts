import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b/b.component';
import { Module3Module } from './module3/module3.module';



@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule,
    Module3Module
  ],
  exports: [
    BComponent
  ]
})
export class Module2Module { }
