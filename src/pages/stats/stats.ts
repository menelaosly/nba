import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

//import providers
import { LeaderProvider } from '../../providers/leader/leader';
import { TeamProvider } from '../../providers/team/team';

//import model
import { PlayerL } from '../../model/Player';

import { DetailsPage } from '../../pages/details/details';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  category: any;
  teams: any;
  json: any;
  players: PlayerL[];
  playersJson: any;
  searchInput: any;
  splash:boolean=true;
  isSearch=false;
  constructor(private teamProvider: TeamProvider, private leaderProvider: LeaderProvider, private navCtrl: NavController) {
    this.category = 'PTS';
    this.teams = new Map();
    this.playersJson = [];
    this.searchInput = "";
  }

  getLeaders(category) {
    this.players = [];
    this.json = this.leaderProvider.getLeaders(category).subscribe(json => {
      this.playersJson = json.resultSet.rowSet;
      console.log(json);
      for (let player in this.playersJson) {
        this.players.push(this.jsonToPlayer(this.playersJson[player]));
      }
    });
  }

  getTeams() {
    this.json = this.teamProvider.getTeams().subscribe(json => {
      let teams = json.resultSets[0].rowSet;
      for (let team of teams) {
        this.teams.set(team[4], team[1]);
      }
    });
  }

  ionViewDidLoad() {
    this.getTeams();
    this.getLeaders(this.category);
    setTimeout(() => {
      this.splash=false;
    }, 3500);
  }

  changeCategory() {
    this.getLeaders(this.category);

  }

  jsonToPlayer(json): PlayerL {
    var p = new PlayerL(json[0], json[1], json[2], json[3],
      json[17], json[18], json[19], json[20], json[22]);
    var img = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/" + this.teams.get(p.team) + "/2017/260x190/" + p.id + ".png";
    p.setImg(img);
    p.setTeamImg("https://stats.nba.com/media/img/teams/logos/" + p.team + "_logo.svg");

    return p;
  }

  goToPlayer(player) {
    this.navCtrl.push(DetailsPage, {
      player: player,
    });
  }

  filterPlayers(event) {
    let val = event.target.value;
    this.players = this.players.filter(function (player) {
      return player.player.toLowerCase().includes(val.toLowerCase());
    })
    if (val && val.trim() !== '') {
      this.players = this.players.filter(function (player) {
        return player.player.toLowerCase().includes(val.toLowerCase());
      })
    }
    else {
      this.getLeaders(this.category);
    }
  }

  onCancel(event) {
    this.getLeaders(this.category);
    this.isSearch=false;
  }


}
