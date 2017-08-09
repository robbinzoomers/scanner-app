import { Component } from '@angular/core';
import { Platform, NavParams } from "ionic-angular";
import { Keyboard } from '@ionic-native/keyboard';

import { GoogleMaps, GoogleMapsEvent, CameraPosition, Marker, Geocoder } from '@ionic-native/google-maps';

import { Message } from '../../app/_models/message.model';

@Component({
  selector: 'page-messages-detail',
  templateUrl: 'messages-detail.html'
})

export class MessagesDetailPage {

  message: Message;
  radius: number = 1000;
  zoom: number = 14;

  map; mapControl; marker; circle; camera; latLng; address;

  constructor(private googleMaps: GoogleMaps,
              private geoCoder: Geocoder,
              private keyboard: Keyboard,
              private platform: Platform,
              private navParams: NavParams) {

    this.message = this.navParams.data.message;
  }


  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }


  loadMap() {

    let element: HTMLElement = document.getElementById('mapLayer');
    this.map = this.googleMaps.create(element);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(mapControl => {
        this.mapControl = mapControl;

        this.latLng = {lat: this.message.latitude, lng: this.message.longitude};

        this.placeMarker();
        this.moveCamera();
      });

  }


  gotoCurrentLocation() {
    this.moveCamera();
  }

  moveToLocation() {
    this.clearMap();
    this.placeMarker();
    this.moveCamera();
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
    this.map.moveCamera({
      target: this.latLng,
      zoom: this.zoom,
      tilt: 0,
      bearing: 360
    }).then((camera: CameraPosition) => {
      this.camera = camera;
    });
  }

}

