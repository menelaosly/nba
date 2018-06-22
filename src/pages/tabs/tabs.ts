import { Component } from '@angular/core';
import { StatsPage } from '../stats/stats';
import { NewsStandPage } from '../news-stand/news-stand';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StatsPage;
  tab2Root = NewsStandPage;

  constructor() {

  }
}
