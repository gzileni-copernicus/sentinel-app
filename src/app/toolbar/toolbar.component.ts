import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string = '';
  @Output() openMenu = new EventEmitter<boolean>();

  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public get icon(): string {
    return this.opened ? 'menu_open' : 'menu'
  }

  public onOpenMenu(event: any): void {
    this.opened = !this.opened;
    this.openMenu.emit(this.opened);
  }

}
