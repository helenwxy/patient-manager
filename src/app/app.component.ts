import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'patient';

  public onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
