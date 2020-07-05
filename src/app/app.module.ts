import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { HighlightDirective } from './highlight.directive';
import { CbComponent } from './cb/cb.component';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    HighlightDirective,
    CbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MyappComponent]
})
export class AppModule { }
