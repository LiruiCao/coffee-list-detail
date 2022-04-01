import { Action, createReducer, on } from '@ngrx/store';
import * as CoffeeActions from './coffee.actions';

export const coffeeFeatureKey = 'coffee';

export interface State {
  loading: boolean;
  coffees?: any;
  coffeeError?: any;
}

export const initialState: State = {
  loading: false,
  coffees: undefined,
  coffeeError: undefined

};

export const coffeeReducer = createReducer(
  initialState,

  on(CoffeeActions.getCoffees, state => ({
    ...state,
    loading: true,
    coffees: undefined,
    coffeeError: undefined
  })),
  on(CoffeeActions.getCoffeesSuccess, (state, action) => {
    return {
      ...state,
      coffees: action.data,
      loading: false,
      coffeeError: undefined
    }
  }),
  on(CoffeeActions.getCoffeesFailure, (state, action) => {
  return {
    ...state,
    coffees: undefined,
    loading: false,
    coffeeError: action.error
  }
})
)

export function reducer(state: State | undefined, action: Action) {
  return coffeeReducer(state, action);
}