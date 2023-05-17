import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import  { InfoComponent } from '../info/info.component';
import { ListComponent } from '../list/list.component';
import { CreateFromComponent } from '../create-from/create-from.component';
const route: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'info',
    component: InfoComponent
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'create',
    component: CreateFromComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
