import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { photosActions } from './actions';
import { PhotosService } from '../photos.service';

@UntilDestroy()
@Injectable()
export class PhotosEffects {
  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {}

  public importPhotosAndContinue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(photosActions.importPhotosContinue),
      tap((action) => console.log(`effect::`, action.type))
      // switchMap((val) => {
      //   this.photosService.importPhotos();
      //   return of(val);
      // }),
    )
  );
}
