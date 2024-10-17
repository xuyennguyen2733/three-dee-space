import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'three-dee-space';
  modelPath: string | undefined;
  
  displayModel (path: string) {
    this.modelPath = path;
  }
}
