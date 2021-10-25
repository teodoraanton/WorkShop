import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch:'full' },
  { path: 'note-details', component: NoteDetailsComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
