import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LocationComponent } from './pages/location/location.component';
import { LocationTitleComponent } from './components/location-title/location-title.component';
import { LocationImageTilesComponent } from './components/location-image-tiles/location-image-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CardComponent,
    HeaderComponent,
    HomeComponent,
    HttpClientModule,
    LocationComponent,
    LocationImageTilesComponent,
    LocationTitleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
