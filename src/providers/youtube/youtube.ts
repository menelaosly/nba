import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YoutubeProvider {
  constructor(public http: Http) {
  }

  getVideos(){
    return this.http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAXT52oyiZ5465FZy37RE9J5-U69emgycY&channelId=UCWJ2lWNubArHWmf3FIHbfcQ&part=snippet,id&order=date&maxResults=20")
            .map(data=> data.json());
  }

}
