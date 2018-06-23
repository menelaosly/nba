import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TeamProvider {
  constructor(private http:Http) {
  }

  getTeams(){
    return this.http.get('https://stats.nba.com/stats/commonTeamYears/?LeagueID=00')
    .map(data=>data.json());
  }

}
