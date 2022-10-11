import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { MatDialog } from '@angular/material/dialog';
import { SpotlightComponent } from './spotlight/spotlight.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public files: string[];

  constructor(
    private galleryService: GalleryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.files = this.galleryService.populateFileNames();
  }

  public openImage(fileName: string) {
    console.log('Open Image', fileName);
    this.dialog.open(SpotlightComponent, {
      data: { fileName: fileName },
    });
  }
}
