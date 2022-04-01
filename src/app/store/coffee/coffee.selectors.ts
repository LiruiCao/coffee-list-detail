import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoffeeListView } from 'src/app/config/model/data.model';
import * as fromCoffee from './coffee.reducer';

export const selectCoffeeState = createFeatureSelector<fromCoffee.State>(
  fromCoffee.coffeeFeatureKey
);

export const coffees$ = createSelector(selectCoffeeState, (state)=> state.coffees);
export const coffeesError$ = createSelector(selectCoffeeState, (state)=> state.coffeeError);
export const coffeesLoading$ = createSelector(selectCoffeeState, (state)=> state.loading);

export const selectCoffeeById$ = (id: number) => createSelector (
  coffees$, (coffees: Array<CoffeeListView>) => {
    if(coffees){
    return coffees && coffees.find((item: any) => item.id === id);
  } else {
    return {};
  }
}
);
