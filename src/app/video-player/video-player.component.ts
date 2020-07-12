import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, Injectable, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
@Injectable()
export class VideoPlayerComponent implements OnInit {
  videoInfo: any;
  id: string;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;

  @ViewChild('videoPlayer', {static: false})
  videoPlayer: any;
  duracion: string;
  progreso: number;
  posicion: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.videoID;
      this.obtenerInfoVideo();
    });
  }

  obtenerInfoVideo(): void {
    this.http
      //.get("http://localhost/PHPAngularConection/API/info-video.php?id=" + this.id)
      .get("https://ancient-mesa-14736.herokuapp.com/API/info-video.php?id=" + this.id)
      //.get("https://apizgvideos.azurewebsites.net/API/info-video.php?id=" + this.id)
      .subscribe((res: Response) => {
        this.videoInfo = res[0];
      });
  }

  reproducirVideo(): void {
    this.videoPlayer.nativeElement.play();
  }

  detenerVideo(): void {
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
  }

  pausarVideo(): void {
    this.videoPlayer.nativeElement.pause();
  }

  onMetadata(e,video): void {
    let minutos = Math.floor(video.duration / 60);
    let segundos = Math.floor(video.duration);
    this.duracion = minutos + ":" + segundos;
  }

  onTimeUpdate(e, video):void {
    this.progreso = Math.floor((video.currentTime/video.duration)*100);
    let minutos = Math.floor(video.currentTime / 60);
    let segundos =  Math.floor(video.currentTime);
    this.posicion = minutos + ":" + segundos;
  }
}
