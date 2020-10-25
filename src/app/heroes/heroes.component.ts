import {Component, OnInit} from '@angular/core';

import {Hero} from '../Hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.messages.push(`HeroesComponent: Selected Hero id =${hero.id}`);
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
