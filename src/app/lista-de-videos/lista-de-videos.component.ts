import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-lista-de-videos",
  templateUrl: "./lista-de-videos.component.html",
  styleUrls: ["./lista-de-videos.component.css"]
})
@Injectable()
export class ListaDeVideosComponent implements OnInit {
  // tslint:disable-next-line: deprecation
  videos: Array<Object>;
  rutaServer: String;
  constructor(private http: HttpClient) {}

  //configUrl = "http://localhost/PHPAngularConection/API/lista-de-videos.php";
  //configUrl = "https://apizgvideos.azurewebsites.net/API/lista-de-videos.php";
  configUrl = "https://ancient-mesa-14736.herokuapp.com/API/lista-de-videos.php";

  ngOnInit() {
    this.videos = [];
    //this.rutaServer = "http://localhost/PHPAngularConection/API/uploads/";
    //this.rutaServer = "https://csbd2ced10e566ax4e5fx957.blob.core.windows.net/videos/";
    this.rutaServer = "https://ancient-mesa-14736.herokuapp.com/API/uploads/";
    this.peticionExterna();
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  peticionExterna(): void {
    this.getConfig().subscribe((results: Response) => {
      let i = 0;
      while (results[i] != null) {
        this.videos.push(results[i]);
        i++;
      }
      //console.log(results);
    });
  }
}
