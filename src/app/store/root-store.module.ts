import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCoffee from './coffee/coffee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './coffee/coffee.effects';
import { metaReducers, reducers } from '.';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),

    StoreModule.forFeature(fromCoffee.coffeeFeatureKey, fromCoffee.reducer),
    EffectsModule.forFeature([CoffeeEffects])
  ]
})
export class RootStoreModule { }
