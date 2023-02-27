import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Gallery, ImageSize } from  'ng-gallery';
import { Lightbox } from  'ng-gallery/lightbox';

export enum TattooType {
  BNW = 'black_n_white',
  COLOR = 'color',
  TOUCH = 'cover_touch_up'
}
export interface Tattoo {
    [TattooType.BNW] : any[],
    [TattooType.COLOR] : any[],
    [TattooType.TOUCH] : any[],
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  constructor(
    private galleryService: GalleryService,
    public gallery: Gallery,
    public lightbox: Lightbox
  ) {}

  public files: Tattoo ={
    [TattooType.BNW] : [],
    [TattooType.COLOR] : [],
    [TattooType.TOUCH] : [],
} ;
  TattooType = TattooType;

  public srcPath = { 
    [TattooType.BNW] : './../../assets/imgs/' + TattooType.BNW,
    [TattooType.COLOR] : './../../assets/imgs/' + TattooType.COLOR,
    [TattooType.TOUCH] : './../../assets/imgs/' + TattooType.TOUCH,
  };

  ngOnInit(): void {
    this.gallery.config.imageSize = ImageSize.Contain;
    this.files = this.galleryService.populateFileNames(this.files);
  }
}
