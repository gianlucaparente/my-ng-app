import { Component, OnInit } from '@angular/core';
import { Hero } from '../app.entities';
import { HEROES } from '../mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private selectedHero: Hero;
  private heroes: Hero[];

  constructor() { }

  ngOnInit() {
    this.heroes = HEROES;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
