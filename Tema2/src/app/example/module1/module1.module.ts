import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { Module2Module } from './module2/module2.module';



@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    CommonModule,
    Module2Module
  ],
  exports: [
    AComponent
  ]
})
export class Module1Module { }
