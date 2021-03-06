import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ItgiupComponent } from './itgiup/itgiup.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' } 
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ItgiupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
