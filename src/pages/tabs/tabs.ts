import { Component } from '@angular/core';
import { StatsPage } from '../stats/stats';
import { NewsStandPage } from '../news-stand/news-stand';
import { VideosPage } from '../videos/videos';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StatsPage;
  tab2Root = NewsStandPage;
  tab3Root = VideosPage;

  constructor() {

  }
}
