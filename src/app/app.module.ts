import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';

import { CoreService } from './core/core.service';


@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
