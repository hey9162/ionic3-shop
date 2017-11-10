import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class GoodsDataProvider {
  goodsData: any;

  constructor(public http: Http) { }

  load(): any {
    if (this.goodsData) {
      return Observable.of(this.goodsData);
    }else {
      return this.http.get('assets/data/goods-data.json').map((data: any) => {
        return this.goodsData = data.json();
      }, this);
    }
  } 

  getData(prop: string): any[] {
    let result: any[] = [];
    this.load().subscribe((data) => {
      for(let i = 0; i < 10; i++) {
        result.push( this._getRandomData(data[prop]));
      }
    });
    return result;
  }

   // 异步 滚动加载
  getAsyncData(prop: string): Promise<any[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getData(prop));
      }, 900);
    });
  }

  private _getRandomData(_data: any[]) {
    let i = Math.floor( Math.random() * _data.length);
    return _data[i];
  }

}
