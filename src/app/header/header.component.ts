import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed: boolean = true;
  @Output() selection = new EventEmitter<string>();

  onSelect(selected: string) {
    this.selection.emit(selected);
  }
}
