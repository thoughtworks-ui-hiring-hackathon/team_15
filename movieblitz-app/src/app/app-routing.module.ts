import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
