import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroItemComponent } from './heroes/hero-list/hero-item/hero-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { EllipsePipe } from './shared/pipe/ellipse.pipe';
import { HeroStartComponent } from './heroes/hero-start/hero-start.component';
import { HeroEditComponent } from './heroes/hero-edit/hero-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroItemComponent,
    DashboardComponent,
    EllipsePipe,
    HeroStartComponent,
    HeroEditComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FieldsetModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
