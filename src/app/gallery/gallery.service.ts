import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Tattoo, TattooType } from './gallery.component';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private db: AngularFirestore) {}

  public populateFileNames(files: Tattoo) {

    const fileCount = {
      [TattooType.BNW]: 97,
      [TattooType.COLOR]: 57,
      [TattooType.TOUCH]: 22,
    }
    Object.keys(files).forEach(tattooType => {
      for (let fileIndex = 1; fileIndex <= fileCount[tattooType as TattooType]; fileIndex++) {
        files[tattooType as TattooType].push('./../../assets/imgs/' + tattooType + '/' + fileIndex + '.png');
      }
    });
    return files;
  }
}
