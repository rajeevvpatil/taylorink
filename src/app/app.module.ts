import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { SpotlightComponent } from './gallery/spotlight/spotlight.component';
import { StoreModule } from '@ngrx/store';
import { ContactComponent } from './contact/contact.component';
import { StudioComponent } from './studio/studio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ArtistsComponent,
    AboutComponent,
    SpotlightComponent,
    ContactComponent,
    StudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
