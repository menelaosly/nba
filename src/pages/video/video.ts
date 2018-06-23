import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Video } from '../../model/Video';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  video:Video;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.video=navParams.get("video");
  }

  ionViewDidLoad() {
  }

}
