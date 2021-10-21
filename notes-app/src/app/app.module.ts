import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatCardModule } from '@angular/material/card';
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component'
import { NoteService } from './services/note.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockApiInterceptor } from './services/http-mock-api.interceptor';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    NoteComponent,
    ToolsComponent,
    AddPipe,
    FilterComponent,
    AddNoteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    NoteService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMockApiInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
