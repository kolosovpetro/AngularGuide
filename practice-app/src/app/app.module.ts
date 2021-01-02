import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { ReadFromFieldComponent } from './read-from-field/read-from-field.component';
import {FormsModule} from '@angular/forms';
import { ChangeColorComponent } from './change-color/change-color.component';

@NgModule({
  declarations: [
    AppComponent, CountComponent, ReadFromFieldComponent, ChangeColorComponent
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
