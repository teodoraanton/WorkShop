import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c/c.component';
import { Module4Module } from './module4/module4.module';



@NgModule({
  declarations: [
    CComponent
  ],
  imports: [
    CommonModule,
    Module4Module
  ],
  exports: [
    CComponent
  ]
})
export class Module3Module { }
