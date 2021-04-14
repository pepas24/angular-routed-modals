import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ModalComponent } from './modal/modal.component';
import { CreateProductComponent } from './modals/create-product/create-product.component';
import { CreateClientComponent } from './modals/create-client/create-client.component';
import { CreateFirstItemComponent } from './modals/create-first-item/create-first-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ModalComponent,
    CreateProductComponent,
    CreateClientComponent,
    CreateFirstItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
