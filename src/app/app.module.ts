import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const rutasApp = [
  { path: 'lista-video', component: ListaDeVideosComponent },
  { path: 'video-player/:videoID', component: VideoPlayerComponent },
  { path: '', redirectTo: 'lista-video', pathMatch: 'full' },
  { path: '**', component: ListaDeVideosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeVideosComponent,
    VideoPlayerComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MenuModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
