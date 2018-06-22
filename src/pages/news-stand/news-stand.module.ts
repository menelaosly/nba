import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsStandPage } from './news-stand';

@NgModule({
  declarations: [
    NewsStandPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsStandPage),
  ],
})
export class NewsStandPageModule {}
