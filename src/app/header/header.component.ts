import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line: ban-types
  rutaServer: String;
  items: MenuItem[];

  ngOnInit() {
    this.rutaServer = 'https://ancient-mesa-14736.herokuapp.com/API/uploads/';
    this.items = [{
      label: 'Video list',
      icon: 'pi pi-fw pi-bars',
      routerLink: 'lista-video'
    },
    {
      label: 'Video player',
      icon: 'pi pi-fw pi-video',
      routerLink: 'video-player'
    }];
  }

}
