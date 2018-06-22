import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class TeamProvider {
  constructor(private http:Http) {
  }

  getTeams(){
    return this.http.get('/stats/stats/commonTeamYears/?LeagueID=00')
    .map(data=>data.json());
  }

}
