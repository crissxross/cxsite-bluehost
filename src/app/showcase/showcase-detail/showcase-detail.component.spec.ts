/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ShowcaseDetailComponent } from './showcase-detail.component';

describe('Component: ShowcaseDetail', () => {
  it('should create an instance', () => {
    let component = new ShowcaseDetailComponent();
    expect(component).toBeTruthy();
  });
});
