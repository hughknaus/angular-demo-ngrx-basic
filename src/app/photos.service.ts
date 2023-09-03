import { Injectable, OnInit } from '@angular/core';
import { createAction, Store } from '@ngrx/store';
import { debounceTime, of, take, tap } from 'rxjs';
import { photosActions } from './store/actions';

@Injectable({
  providedIn: 'root',
})
export class PhotosService implements OnInit {
  constructor(private store: Store<{}>) {
    console.log(`PhotosService ctor`);
  }

  public ngOnInit() {
    this.store.subscribe((state) => {
      console.log(`photosService::state`, state);
    });
  }

  public importPhotos() {
    of('xy')
      .pipe(
        debounceTime(2000),
        tap(() => {
          console.log(`photosService::dispatching`);
          this.store.dispatch(photosActions.importPhotosContinue());
        }),
        take(1)
      )
      .subscribe();
  }
}
