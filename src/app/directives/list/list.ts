import {Component} from 'angular2/core';
import {Directive, ElementRef, Input} from 'angular2/core';

@Component({
  selector: 'list',
  templateUrl: 'app///directives/list/list.html',
  styleUrls: ['app///directives/list/list.css'],
  providers: [],
  directives: [],
  pipes: []
})

export class List {
  @Input('values') _values: Object[];

  constructor() {}
}