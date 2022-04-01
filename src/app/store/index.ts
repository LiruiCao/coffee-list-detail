import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCoffee from './coffee/coffee.reducer';


export interface State {

  [fromCoffee.coffeeFeatureKey]: fromCoffee.State;
}

export const reducers: ActionReducerMap<State> = {
//need to use directly the key name instead of [fromCoffee.coffeeFeatureKey] to avoid prod build error
  // [fromCoffee.coffeeFeatureKey]: fromCoffee.reducer,
  coffee: fromCoffee.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export {coffees$, coffeesError$, coffeesLoading$, selectCoffeeById$} from './coffee/coffee.selectors';
export * from './coffee/coffee.actions';


