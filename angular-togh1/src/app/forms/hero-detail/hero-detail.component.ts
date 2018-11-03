import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../shared/service/hero.service';
import { Hero } from '../../shared/models/hero';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  addMode = false;
  heroForm: FormGroup;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'desc': new FormControl('')
    });
    if (id === 0) {
      this.hero = new Hero;
      this.hero.img = '/assets/images/default.jpg';
      this.addMode = true;
    } else {
      this.getHero(id);
    }
  }

  getHero(id: number): void {
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        this.heroForm.get('name').setValue(hero.name);
        this.heroForm.get('desc').setValue(hero.desc);
      });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {console.log(this.hero);
    this.hero.name = this.heroForm.value.name;
    this.hero.desc = this.heroForm.value.desc;
    if (this.addMode) {
      this.heroService.addHero(this.hero)
        .subscribe(_hero => this.goBack());
    } else {
      console.log(this.hero);
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
