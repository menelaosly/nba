import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { News } from '../../model/News';
import { NewsProvider } from '../../providers/news/news';
import { NewsPage } from '../news/news';

/**
 * Generated class for the NewsStandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-stand',
  templateUrl: 'news-stand.html',
})
export class NewsStandPage {
  news:News[];

  constructor(private newsProvider:NewsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.news=[];
    this.getNews();
  }

  getNews(){
    this.newsProvider.getNews().subscribe(json=>{
      this.jsonToNews(json.articles);
    });
  }

  jsonToNews(json){
    for(let article of json){
      this.news.push(new News(
        article.title,
        article.publishedAt,
        article.description,
        article.urlToImage,
        article.author,
        article.url
      ));
      console.log(this.news);
    }
  }

  goToNews(news){
    this.navCtrl.push(NewsPage,{news:news});
  }

}
