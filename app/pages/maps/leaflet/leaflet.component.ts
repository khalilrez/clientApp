import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, icon, Layer } from 'leaflet';
declare const L: any;
@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  constructor() { }


  markers: Layer[] = [];
  private mymap: any;

  addMarker() {
    const amenIcon = L.icon({
      iconUrl: 'assets/images/pin.PNG',
      shadowUrl: 'assets/images/pin.PNG',

      iconSize:     [24, 24],
      iconAnchor:   [12, 24],
    });
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < 5; _i++) {

      // tslint:disable-next-line:no-shadowed-variable
     this.markers = L.marker([36.8143122, 10.1821014], {icon: amenIcon}).addTo(this.mymap);

  }

  }



  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log(`location is not supported`);
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      console.log(`lat ${position.coords.latitude} long ${position.coords.longitude}`);
      this.mymap = L.map('mapid').setView([coords.latitude, coords.longitude], 6);
      // tslint:disable-next-line:max-line-length
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2hhbGlscmV6IiwiYSI6ImNrcGY0cWlyOTAyMDYydm1za3YxdnZyNmQifQ.c-chb86V_cVArEEdMspzQA', {
        // tslint:disable-next-line:max-line-length
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoia2hhbGlscmV6IiwiYSI6ImNrcGY0cWlyOTAyMDYydm1za3YxdnZyNmQifQ.c-chb86V_cVArEEdMspzQA'
      }).addTo(this.mymap);

      // ADD MARKERS
      const amenIcon = L.icon({
        iconUrl: 'assets/images/pin.PNG',
        shadowUrl: 'assets/images/pin.PNG',

        iconSize:     [24, 24], // size of the icon
        iconAnchor:   [12, 24], // point of the icon which will correspond to marker's location
      });
      // tslint:disable-next-line:variable-name
      for (let _i = 0; _i < 5; _i++) {

        // tslint:disable-next-line:no-shadowed-variable
        this.markers = L.marker([36.8143122, 10.1821014], {icon: amenIcon}).addTo(this.mymap);

      }
    });
  }
}
