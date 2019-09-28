import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditableFormComponent } from './editable-form/editable-form.component'

const routes: Routes = [
  {
    path: 'editForm',
    component: EditableFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }