import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Link} from '../../models/link';

@Injectable()
export class Links {

  constructor(private _http: Http) {}

  // Service
  getLinks() {
    return this._http
    .get('http://localhost:9005/api/v1/links')
    .map(response => {
        return <Link[]> response.json().links;
    });
  }

}
