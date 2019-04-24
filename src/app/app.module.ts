import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooniesComponent } from './components/goonies/goonies.component';
import { GoonieItemComponent } from './components/goonie-item/goonie-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddGoonieComponent } from './components/add-goonie/add-goonie.component';

@NgModule({
  declarations: [
    AppComponent,
    GooniesComponent,
    GoonieItemComponent,
    HeaderComponent,
    AddGoonieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
