import { Injectable } from '@angular/core';
import { Hero } from 'src/app/heroes/hero-list/hero.model';
import { Member } from '../model/member.model';
import { MemberListService } from './member-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroChanged = new Subject<Hero[]>();

  private heroes: Hero[] = [
    new Hero('Metallica',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Metallica_-_The_O2_-_' +
    'Sunday_22nd_October_2017_MetallicaO2221017-107_%2837640633730%29.jpg/800px-Metallica_-_' +
    'The_O2_-_Sunday_22nd_October_2017_MetallicaO2221017-107_%2837640633730%29.jpg',
    'Metallica is an American heavy metal band. ' +
    'The band was formed in 1981 in Los Angeles, California by drummer Lars Ulrich and vocalist/guitarist James Hetfield, ' +
    'and has been based in San Francisco, California for most of its career.',
    [
      new Member('James Hetfiled', 1981, null, 'guitars'),
      new Member('Lars Ulrich', 1981, null, 'drums'),
      new Member('Kirk Hammet', 1983, null, 'lead guitar'),
      new Member('Robert Trujillo', 2003, null, 'bass guitar'),
      new Member('Dave Mustaine', 1982, 1983, 'guitars'),
      new Member('Cliff Burton', 1982, 1986, 'bass guitar'),
      new Member('Jason Newsted', 1986, 2001, 'bass guitar'),
      new Member('Ron Mc Govney', 1982, 1982, 'bass guitar'),
      new Member('Bob Rock', 2001, 2003, 'lead guitar')
    ]),
    new Hero('Judas Priest',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Judaspriest_wembley_210209_724c.jpg/1024px-Judaspriest' +
    '_wembley_210209_724c.jpg',
    'Judas Priest are an English heavy metal band formed in West Bromwich in 1969. The band have sold over 50 million copies' +
    ' of their albums to date. They are frequently ranked as one of the greatest metal bands of all time.',
    [
      new Member('Ian Hill', 1969, null, 'bass guitar'),
      new Member('Rob Halford', 1973, null, 'vocals'),
      new Member('Glenn Tipton', 1974, null, 'guitars'),
      new Member('Scott Travis', 1989, null, 'drums'),
      new Member('Richie Faulkner', 2011, null, 'guitars'),
      new Member('Tim "Ripper" Owens', 1996, 2003, 'vocals')
    ]),
    new Hero('Led Zeppelin',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Led_Zeppelin_2007.jpg/800px-Led_Zeppelin_2007.jpg',
    'Led Zeppelin were an English rock band formed in London in 1968. ' +
    'The group consisted of guitarist Jimmy Page, singer Robert Plant, bassist and keyboardist John Paul Jones, ' +
    'and drummer John Bonham. The band\'s heavy, guitar-driven sound has led them to be cited as one of the progenitors ' +
    'of heavy metal.',
    [
      new Member('Robert Plant', 1968, null, 'lead vocals, harmonica, percussion'),
      new Member('Jimmy Page', 1968, null, 'guitar'),
      new Member('John Bonham', 1968, null, 'bass, keyboards, mandolin'),
      new Member('John Paul Jones', 1968, null, 'drums'),
    ] )
  ];
  constructor(private memberListService: MemberListService) { }

  getheroes() {
    return this.heroes.slice();
  }

  getHero(index: number) {
    return this.heroes[index];
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
    this.heroChanged.next(this.heroes.slice());
  }

  updateHero(index: number, hero: Hero) {
    this.heroes[index] = hero;
    this.heroChanged.next(this.heroes.slice());
  }

  deleteHero(index: number) {
    this.heroes.splice(index, 1);
    this.heroChanged.next(this.heroes.slice());
  }

  addMembersToHeroList(members: Member[]) {
    this.memberListService.addMembers(members);
  }
}
