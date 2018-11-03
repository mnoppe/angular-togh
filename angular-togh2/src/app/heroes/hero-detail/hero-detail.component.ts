import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-list/hero.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeroService } from 'src/app/shared/service/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private heroService: HeroService, public location: Location) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.hero = this.heroService.getHero(this.id);
        }
      );
  }

  toMembers() {
    this.heroService.addMembersToHeroList(this.hero.members);
  }

  editHero() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteHero() {
    this.heroService.deleteHero(this.id);
    this.router.navigate(['/heroes']);
  }

  goBack() {
    this.location.back();
  }

}
