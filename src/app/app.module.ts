import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouteModule } from './route/route.module';
import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';
import { CreateFromComponent } from './create-from/create-from.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ListComponent,
    CreateFromComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
