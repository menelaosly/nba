import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http'
import { NewsProvider } from '../providers/news/news';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { NewsStandPage } from '../pages/news-stand/news-stand';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LeaderProvider } from '../providers/leader/leader';
import { TeamProvider } from '../providers/team/team';
import { PlayerStatsProvider } from '../providers/player-stats/player-stats';
import { DetailsPage } from '../pages/details/details';
import { StatsPage } from '../pages/stats/stats';
import { YoutubeProvider } from '../providers/youtube/youtube';
import { VideoPage } from '../pages/video/video';
import { VideosPage } from '../pages/videos/videos';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DetailsPage,
    StatsPage,
    NewsStandPage,
    NewsPage,
    VideosPage,
    VideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DetailsPage,
    StatsPage,
    NewsPage,
    NewsStandPage,
    VideosPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeaderProvider,
    TeamProvider,
    PlayerStatsProvider,
    NewsProvider,
    YoutubeProvider
  ]
})
export class AppModule {}
