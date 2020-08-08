import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css']
})
@Injectable()
export class ListaDeVideosComponent implements OnInit {
  // tslint:disable-next-line: deprecation
  // tslint:disable-next-line: ban-types
  videos: Array<Object>;
  // tslint:disable-next-line: ban-types
  rutaServer: String;
  dataResult: any;
  constructor(private http: HttpClient) {}

  configUrl = 'https://ancient-mesa-14736.herokuapp.com/API/lista-de-videos';

  ngOnInit() {
    this.videos = [];
    this.rutaServer = 'https://ancient-mesa-14736.herokuapp.com/API/uploads/';
    this.peticionExterna();
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  peticionExterna(): void {
    this.getConfig().subscribe((results: Response) => {
      this.dataResult = results;
      for (const entry of this.dataResult ) { this.videos.push(entry); }
    });
  }
}
