import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private photosService: PhotosService) {
    this.importPhotos();
  }

  public importPhotos() {
    this.photosService.importPhotos();
  }
}
