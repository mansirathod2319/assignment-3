import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { DisplayComboComponent } from './display-combo/display-combo.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    DisplayListComponent,
    DisplayComboComponent,
    UserInputFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
