import { Component } from '@angular/core';
import { Platform } from "ionic-angular";
import { Keyboard } from '@ionic-native/keyboard';

import { GoogleMaps, GoogleMapsEvent, CameraPosition, Marker, Geocoder } from '@ionic-native/google-maps';


@Component({
  selector: 'page-radius-add',
  templateUrl: 'radius-add.html'
})

export class RadiusAddPage {

  radius: number = 1000;
  zoom: number = 14;

  map; mapControl; marker; circle; camera; latLng; address;

  constructor(private googleMaps: GoogleMaps,
              private geoCoder: Geocoder,
              private keyboard: Keyboard,
              private platform: Platform) { }


  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }


  loadMap() {
    let element: HTMLElement = document.getElementById('map');
    this.map = this.googleMaps.create(element);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(mapControl => {
        this.mapControl = mapControl;
      });


    this.map.getMyLocation(location => {

      this.latLng = location.latLng;

      this.placeMarker();
      this.moveCamera();
      this.placeCircle();
    });
  }


  showAddress(event) {
    this.geoCoder.geocode({address: event.address})
      .then(address => {
        this.keyboard.close();
        this.latLng = {lat: address[0].position.lat, lng: address[0].position.lng};
        this.moveToLocation();
      }).catch(error => {
        console.log('error while geocoding address', error);
      });
  }


  onCancel(event) {
    this.address = '';
    this.keyboard.close();
  }


  gotoCurrentLocation() {
    this.moveCamera();
  }


  moveToLocation() {
    this.clearMap();
    this.placeMarker();
    this.moveCamera();
    this.placeCircle();
  }


  clearMap() {
    this.marker.remove();
    this.circle.remove();
  }


  placeMarker() {
    this.map.addMarker({
      position: this.latLng
    }).then((marker: Marker) => {
      this.marker = marker;
    });
  }


  moveCamera() {
    this.map.animateCamera({
      target: this.latLng,
      zoom: this.zoom,
      tilt: 30,
      bearing: 360,
      duration: 3000
    }).then((camera: CameraPosition) => {
      this.camera = camera;
    });
  }


  placeCircle() {
    this.map.addCircle({
      center: this.latLng,
      radius: this.radius,
      strokeColor: '#FFBC67',
      strokeWidth: 2,
      fillColor: '#FFBC67'
    }).then(circle => {
      this.circle = circle;
    });
  }


  expandRadius() {
    this.mapControl.animateCameraZoomOut();

    this.zoom = (this.zoom-1);

    this.radius = (this.radius+1000);
    this.circle.setRadius(this.radius);
  }


  decreaseRadius() {
    this.mapControl.animateCameraZoomIn();

    this.zoom = (this.zoom+1);

    this.radius = (this.radius-1000);
    this.circle.setRadius(this.radius);
  }

}
