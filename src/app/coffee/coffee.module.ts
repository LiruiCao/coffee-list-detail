import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CoffeeComponent } from './coffee.component';
import { CoffeeRoutingModule } from './coffee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppConfig } from '../config/model/app.config';
import * as fromCoffee from '../store/coffee/coffee.reducer';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ShellComponent,
    ListComponent, 
    DetailComponent,
    CoffeeComponent
  ],
  // exports: [
  //   ShellComponent,
  //   ListComponent, 
  //   DetailComponent,
  //   CoffeeComponent
  // ],
  providers: [AppConfig],
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    NgxPaginationModule,
    // RouterModule,
    // HttpClientModule,
    // FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromCoffee.coffeeFeatureKey, fromCoffee.reducer)
  ]
})
export class CoffeeModule { }
