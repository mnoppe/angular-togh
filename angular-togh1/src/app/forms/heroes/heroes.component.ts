import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/service/hero.service';
import { Hero } from '../../shared/models/hero';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'List of Guitar Heroes';
  heroes: Hero[] = [];
  faTrashAlt = faTrashAlt;
  faSearch = faSearch;

  constructor(private heroService: HeroService, public route: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(_ => _ !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  add(): void {
    this.route.navigate(['/hero/0']);
  }
}
