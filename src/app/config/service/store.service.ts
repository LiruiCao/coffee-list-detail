import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, first, fromEvent, Observable, of, tap } from 'rxjs';
import * as fromStore from 'src/app/store/index';
import { selectCoffee } from 'src/app/store/index';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  coffees$: Observable<any> = of();
  coffeesLoading$: Observable<any> = of();
  coffeesError$: Observable<any> = of();

  constructor(
    private store: Store<fromStore.State>,
  ) {
    //selectors
    this.coffees$ = this.store.select(fromStore.coffees$);
    console.log('store-coffees$--->', this.coffees$);
    this.coffeesLoading$ = this.store.select(fromStore.coffeesLoading$);
    this.coffeesError$ = this.store.select(fromStore.coffeesError$);


    // dispatch actions
  }
  getCoffees() {
    this.store.dispatch(fromStore.getCoffees());
  }
  selectCoffeebyId(id: number): any {
    return this.store.
      select(fromStore.selectCoffeeById$(id))
      .pipe(
        filter((coffee) => !!coffee),
        first()
      )
  }
}
