import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeasonStats} from '../../model/SeasonStats';
import {PlayerL} from '../../model/Player';
import { PlayerStatsProvider } from '../../providers/player-stats/player-stats';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  headers:string[];
  player:PlayerL;
  team:string;
  stats:SeasonStats[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private playerStats:PlayerStatsProvider) {
    this.player=navParams.get("player");

  }

  ionViewDidLoad() {
    this.team=this.player.team;
    this.headers=["Season","Team", "GP","GS","MIN","FGM","FGA","FG%",
    "FG3M","FG3A","FG3%","FTM","FTA","FT%","OREB","DREB","REB",
    "AST","STL","BLK","TOV","PF","PTS"];
    this.getStats();
  }

  getStats(){
    this.playerStats.getStats(this.player.id).subscribe(json=>{
      var stats=json.resultSets[0].rowSet;
      this.stats=this.jsonToStats(stats);
    });
  }

  jsonToStats(json):SeasonStats[]{
    var stats=[];
    for(let season of json){
      stats.push(new SeasonStats(
        season[1],
        season[4],
        season[6],
        season[7],
        season[8],
        season[9],
        season[10],
        season[11],
        season[12],
        season[13],
        season[14],
        season[15],
        season[16],
        season[17],
        season[18],
        season[19],
        season[20],
        season[21],
        season[22],
        season[23],
        season[24],
        season[25],
        season[26]
      ));    
    }
    return stats;
  }

}
