import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-list/hero.model';
import { Subscription } from 'rxjs';
import { HeroService } from 'src/app/shared/service/hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-start',
  templateUrl: './hero-start.component.html',
  styleUrls: ['./hero-start.component.css']
})
export class HeroStartComponent implements OnInit {
  private heroes: Hero[] = [];
  subscription: Subscription;

  constructor( private heroService: HeroService, private router: Router, private route: ActivatedRoute) { }
  
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

  newHero() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  /* constructor() { }

  ngOnInit() {
  } */

}
