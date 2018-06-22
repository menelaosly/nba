import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: Http) {
  }

  getNews(){
    return this.http.get('/news/v2/top-headlines?sources=bleacher-report&apiKey=a5cad0ec257d4fd996c38eecf90588fa')
        .map(data=>data.json());
  }

}
