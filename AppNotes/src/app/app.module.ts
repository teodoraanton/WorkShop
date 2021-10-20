import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNoteComponent } from './add-note/add-note.component';
import { FilterComponent } from './filters/filter.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './notes/note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NoteService } from './services/note.service';
import { ButtonService } from './services/button.service';
import { ErrorStateMatcher, MatOptionModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CategoryService } from './services/category.service';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    FilterComponent,
    HomeComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    NoteService,
    ButtonService,
    CategoryService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
