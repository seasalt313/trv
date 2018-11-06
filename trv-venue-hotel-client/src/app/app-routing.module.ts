import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookHotelComponent } from './app.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: BookHotelComponent,
    pathMatch: 'full'

  },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
