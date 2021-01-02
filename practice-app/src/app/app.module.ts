import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { ReadFromFieldComponent } from './read-from-field/read-from-field.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, CountComponent, ReadFromFieldComponent
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
