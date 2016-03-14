import {bootstrap} from 'angular2/platform/browser';
import {BourboneApp} from './app/bourbone';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(BourboneApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
