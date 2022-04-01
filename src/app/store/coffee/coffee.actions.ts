import { createAction, props } from '@ngrx/store';
import { CoffeeListView } from 'src/app/config/model/data.model';

export const getCoffees = createAction(
  '[Coffee] Get Coffees'
);

export const getCoffeesSuccess = createAction(
  '[Coffee] Get Coffees Success',
  props<{ data:Array<CoffeeListView> }>()
);

export const getCoffeesFailure = createAction(
  '[Coffee] Get Coffees Failure',
  props<{ error: Array<CoffeeListView> }>()
);
export const selectCoffee = createAction(
  '[Coffee] Select a coffee',
  props<{ coffee: CoffeeListView }>()
);
