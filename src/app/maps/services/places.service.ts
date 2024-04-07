import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation: {} | any;

  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  }

  constructor() { 
    this.getUserLocation();
  }

  getUserLocation(): Promise<{}> {
    return new Promise ( (resolve, reject ) => {

      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.userLocation = {lng: coords.longitude, lat: coords.latitude}
          resolve(this.userLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización');
          console.log(err);
          reject(); //Poner fin a la promesa
        }
      );

    })
  }
}
