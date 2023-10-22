
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { DisplayComboComponent } from './display-combo/display-combo.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';


const routes: Routes = [
  // Define your routes here
  { path: 'display-data', component: DisplayDataComponent },
  { path: 'display-list', component: DisplayListComponent },
  { path: 'display-combo', component: DisplayComboComponent },
  { path: 'user-input-form', component: UserInputFormComponent },
  { path: '', redirectTo: '/display-data', pathMatch: 'full' },
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
