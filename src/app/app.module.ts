import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { SpotlightComponent } from './gallery/spotlight/spotlight.component';
import { StoreModule } from '@ngrx/store';
import { ContactComponent } from './contact/contact.component';
import { StudioComponent } from './studio/studio.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ArtistsComponent,
    AboutComponent,
    SpotlightComponent,
    ContactComponent,
    StudioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: FIRESTORE_SETTINGS,
      useValue: { experimentalAutoDetectLongPolling: true, merge: true },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
