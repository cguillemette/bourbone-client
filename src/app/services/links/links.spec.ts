import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Links} from './links';


describe('Links Service', () => {

  beforeEachProviders(() => [Links]);


  it('should ...', inject([Links], (service:Links) => {

  }));

});
