import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[collapse-toggle]',
  exportAs: 'collapsible'
})
export class CollapseToggle {

  @Input('collapsed') isCollapsed = true;

  @Output('collapsed') collapsedOutput = new EventEmitter();

  constructor() { }

  get collapsed() {
    return this.isCollapsed;
  }

  @HostListener('click')
  onToggle() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedOutput.emit(this.isCollapsed);
  }

}
