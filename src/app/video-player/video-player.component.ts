import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
@Injectable()
export class VideoPlayerComponent implements OnInit {
  videoInfo: any;
  id: string;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;

  @ViewChild('videoPlayer')
  videoPlayer: any;
  duracion: string;
  progreso: number;
  posicion: string;
  htmlToAdd: any;

  // tslint:disable-next-line: ban-types
  rutaServer: String;
  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.videoID;
      this.obtenerInfoVideo();
    });
    this.rutaServer = 'https://ancient-mesa-14736.herokuapp.com/API/uploads/';
  }

  obtenerInfoVideo(): void {
    this.http
      .get('https://ancient-mesa-14736.herokuapp.com/API/info-video?id=' + this.id)
      .subscribe((res: Response) => {
        if ( res != null) {
          this.videoInfo = res[0];
          this.htmlToAdd = this.sanitizer.bypassSecurityTrustHtml(this.videoInfo.componenthtml);
        }
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

  onMetadata(e, video): void {
    const minutos = Math.floor(video.duration / 60);
    const segundos = Math.floor(video.duration);
    this.duracion = minutos + ':' + segundos;
  }

  onTimeUpdate(e, video): void {
    this.progreso = Math.floor((video.currentTime / video.duration ) * 100);
    const minutos = Math.floor(video.currentTime / 60);
    const segundos =  Math.floor(video.currentTime);
    this.posicion = minutos + ':' + segundos;
  }
}
