import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './coffee.component';
import { DetailComponent } from './detail/detail.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '', component: CoffeeComponent,
    children: [
      {
        path: '',
        children: [

          { path: '', component: ShellComponent },
          { path: 'info/:id', component: DetailComponent } 

        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule { }
