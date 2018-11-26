import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookHotelComponent } from './app.component';
import { AccountComponent } from './account.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: BookHotelComponent,
    pathMatch: 'full'
  },
  {
    path: 'account',
    component: AccountComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
