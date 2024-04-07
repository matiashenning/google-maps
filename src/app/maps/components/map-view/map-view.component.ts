import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss'
})
export class MapViewComponent {

  title = 'gmaps';
  position = 
    // lat: -39.29316749532748,
    // lng: -72.2180823124066
    this.placesService.userLocation
  
  label = {
    color: 'green',
    text: 'Marcador'
  };


  constructor(private placesService: PlacesService){}

  ngOnInit(): void {
    console.log("ngOnInit mapViewComponent", this.placesService.userLocation);
    
  }

}
