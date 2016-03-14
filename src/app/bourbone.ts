import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {List} from './directives/list/list';
import {Links} from './services/links/links';
import {Link} from './models/link';

import 'rxjs/Rx';

@Component({
  selector: 'bourbone-app',
  providers: [Links],
  templateUrl: 'app/bourbone.html',
  directives: [ROUTER_DIRECTIVES, List],
  pipes: []
})

@RouteConfig([
])

export class BourboneApp implements OnInit {
  defaultMeaning: number = 42;
  links: Link[];

  constructor(private _links: Links) { }
  
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }

  getLinks() {
    this._links.getLinks()
    .subscribe((links) => {
      this.links = links;
    });
  }

  ngOnInit() {
    this.getLinks();
  }
}