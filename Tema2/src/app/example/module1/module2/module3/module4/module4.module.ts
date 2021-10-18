import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DComponent } from './d/d.component';
import { Module5Module } from './module5/module5.module';



@NgModule({
  declarations: [
    DComponent
  ],
  imports: [
    CommonModule,
    Module5Module
  ],
  exports: [
    DComponent
  ]
})
export class Module4Module { }
