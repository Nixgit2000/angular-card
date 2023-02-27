import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { LikesComponent } from './likes/likes.component';
import { CounterComponent } from './counter/counter.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    CounterComponent
  ],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatCardModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
