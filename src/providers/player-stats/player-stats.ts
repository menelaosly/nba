import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PlayerStatsProvider {
  constructor(private http:Http) {
  }

  getStats(id){
    return this.http.get('https://stats.nba.com/stats/playercareerstats/?PerMode=PerGame&PlayerID='+id)
    .map(data=>data.json());
  }
}
