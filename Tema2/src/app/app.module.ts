import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleModule } from './example/example.module';
import { Module5Module } from './example/module1/module2/module3/module4/module5/module5.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleModule,
    Module5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
