import { createActionGroup, emptyProps } from '@ngrx/store';

export const photosActions = createActionGroup({
  source: 'Photos',
  events: {
    'Import Photos Continue': emptyProps(),
  },
});
