import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './coffee/list/list.component';
import { DetailComponent } from './coffee/detail/detail.component';

// const routes: Routes = [
//   { path: '', component: ListComponent },
//   { path: 'info/:id', component: DetailComponent },
// ];
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'coffee' },
  { path: 'coffee', loadChildren: () => import('./coffee/coffee.module').then(m => m.CoffeeModule) }
  // { path: '**', redirectTo: '/' } 有这行，routerlink can't navigate to detail,万有导航要再弄明白
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
