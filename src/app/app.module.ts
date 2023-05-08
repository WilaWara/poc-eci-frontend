import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './modules/retail/components/top-bar/top-bar.component';
import { ProductListComponent } from './modules/retail/components/product-list/product-list.component';
import { ShoppingCartComponent } from './modules/retail/components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './modules/retail/components/filters/filters.component';
import { ProductCardComponent } from './modules/retail/components/product-card/product-card.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
