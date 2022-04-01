import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ConfigService } from 'src/app/config/service/config.service';
import { CoffeeListView, TransactionListView } from 'src/app/config/model/data.model';
import { StoreService } from 'src/app/config/service/store.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  providers: [ConfigService],
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  coffees$: Observable<CoffeeListView> = of();
  coffeesErrors$: Observable<CoffeeListView> = of();
  constructor(private service: ConfigService, private store: StoreService) { }

  ngOnInit(): void {
    this.store.getCoffees();
    this.coffees$ = this.store.coffees$
    console.log('shell-coffees$---', this.coffees$);
    this.coffeesErrors$ = this.store.coffeesError$;
  }
}

