import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../heroes/hero-list/hero.model';
import { Subscription } from 'rxjs';
import { HeroService } from '../shared/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private heroes: Hero[];
  subscription: Subscription;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.subscription = this.heroService.heroChanged
      .subscribe(
        (heroes: Hero[]) => {
          this.heroes = heroes;
        }
      );
    this.heroes = this.heroService.getheroes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
