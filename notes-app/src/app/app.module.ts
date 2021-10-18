import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Curs3Component } from './curs3/curs3.component';
import { TestModule } from './test/test.module';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { Test1Component } from './test/test1/test1.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddPipe } from './add.pipe';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    NoteComponent,
    ToolsComponent,
    AddPipe,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
