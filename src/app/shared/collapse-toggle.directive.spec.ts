/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CollapseToggle } from './collapse-toggle.directive';

describe('CollapseToggle Directive', () => {
  it('should create an instance', () => {
    let directive = new CollapseToggle();
    expect(directive).toBeTruthy();
  });
});
