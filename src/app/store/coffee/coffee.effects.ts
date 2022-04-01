import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as coffeeActions from './coffee.actions';
import { ConfigService } from 'src/app/config/service/config.service';



@Injectable()
export class CoffeeEffects {

  coffees$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(coffeeActions.getCoffees),
      concatMap(() =>
      this.configService.getData().pipe(
          map(data => coffeeActions.getCoffeesSuccess({ ...data })),
          catchError(error => of(coffeeActions.getCoffeesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private configService: ConfigService) {}

}
