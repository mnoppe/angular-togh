import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroStartComponent } from './heroes/hero-start/hero-start.component';
import { HeroEditComponent } from './heroes/hero-edit/hero-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent, children: [
    { path: '', component: HeroStartComponent },
    { path: 'new', component: HeroEditComponent },
    { path: ':id', component: HeroDetailComponent },
    { path: ':id/edit', component: HeroEditComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
