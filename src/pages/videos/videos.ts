import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { Video } from '../../model/Video';
import { VideoPage } from '../video/video';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'videos.html',
})
export class VideosPage {
  videos:Video[];
  constructor(private videoProvider:YoutubeProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.videos=[];
    this.getVideos();
  }

  getVideos(){
    this.videoProvider.getVideos().subscribe(json => {
     for(let video of json.items){
        this.videos.push(new Video(
          video.id.videoId,
          video.snippet.title,
          video.snippet.publishedAt,
          video.snippet.thumbnails.high.url,
          video.snippet.description
        ));
      }
    });
  }

  goToVideo(video){
    this.navCtrl.push(VideoPage,{video:video});
  }

}
