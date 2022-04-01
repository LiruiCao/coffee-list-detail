import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './coffee/list/list.component';
import { DetailComponent } from './coffee/detail/detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeModule } from './coffee/coffee.module';
import { RouterModule } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { StoreModule } from '@ngrx/store';
import {NgxPaginationModule} from 'ngx-pagination';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './store';
import { RootStoreModule } from './store/root-store.module';
import { ConfigService } from './config/service/config.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoffeeModule,
    RootStoreModule,  
    NgxPaginationModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
