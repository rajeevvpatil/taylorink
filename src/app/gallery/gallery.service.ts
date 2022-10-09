import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private db: AngularFirestore) {}

  getAllImages() {
    return new Promise<any>((resolve) => {
      this.db
        .collection('images')
        .valueChanges({ idField: 'id' })
        .subscribe((users) => resolve(users));
    });
  }
}
