import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private db: AngularFirestore) {}

  public populateFileNames() {
    let fileNameArray: string[] = [];
    for (let fileIndex = 1; fileIndex <= 14; fileIndex++) {
      fileNameArray.push('./../../assets/imgs/' + fileIndex + '.jpg');
    }
    return fileNameArray;
  }
}
