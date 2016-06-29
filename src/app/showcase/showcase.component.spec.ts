/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';

describe('Component: Showcase', () => {
  it('should create an instance', () => {
    let component = new ShowcaseComponent();
    expect(component).toBeTruthy();
  });
});
