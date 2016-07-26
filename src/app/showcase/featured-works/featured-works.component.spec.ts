/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FeaturedWorksComponent } from './featured-works.component';

describe('Component: FeaturedWorks', () => {
  it('should create an instance', () => {
    let component = new FeaturedWorksComponent();
    expect(component).toBeTruthy();
  });
});
