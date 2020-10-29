import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from '../hero.service';
import {Hero} from '../Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    // Holds the information of the route to this instance
    private route: ActivatedRoute,
    // Interactions with the browser
    private location: Location,
    // Gets data of hero from remote server
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // Snapshot: static image of the route right after the component creation
    // paramMap: dictionary of map values inside the route
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    );
  }

  goBack(): void {
    this.location.back();
  }
}
