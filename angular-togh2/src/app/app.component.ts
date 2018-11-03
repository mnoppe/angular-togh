import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-togh2';
  loadedFeature = 'hero';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
