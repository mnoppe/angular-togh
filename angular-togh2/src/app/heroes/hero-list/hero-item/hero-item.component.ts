import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input() hero: Hero;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
