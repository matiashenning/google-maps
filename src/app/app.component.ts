import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapScreenComponent } from './maps/screens/map-screen/map-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-map';
}
