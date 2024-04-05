import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  selection: string;

  onNavigate(event: string) {
    this.selection = event;
  }
}
