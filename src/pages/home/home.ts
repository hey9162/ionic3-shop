import { Component } from '@angular/core';
import { NavController,InfiniteScroll } from 'ionic-angular';
import { Http,URLSearchParams } from '@angular/http';

import { GoodsLiData } from '../../interfaces/goods-li-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  goodsList: GoodsLiData[] = [];
  nullData: boolean;
  slider: any;
  pageNo: number = 1;
  constructor(public navCtrl: NavController,
    public http: Http, 
  ) {

  }
  // 视图初始化
  ionViewDidLoad() {
    this.testHttp()
  }

  testHttp(){
    let params = new URLSearchParams();
    params.set('id', "37");
    this.http.post(`http://api.pengpeng.bpiao.com/ERP-Web/ceshi/index/index?pageNo=${this.pageNo}`,Option)
    .subscribe((res)=>{
      let data = res.json();
      this.slider = data.data.list;
      this.goodsList = data.data.page.records;
      console.log(data);
      console.log(this.slider)
    })
  }

  // 滚动加载...
  doInfinite(infiniteScroll: InfiniteScroll, prop: string) {
    this.pageNo++;
    this.http.post(`http://api.pengpeng.bpiao.com/ERP-Web/ceshi/index/index?pageNo=${this.pageNo}`,Option)
    .subscribe((res)=>{
      let data = res.json();
      for( let i = 0; i<data.data.page.records.length; i++){
        this.goodsList.push(data.data.page.records[i]);
      }
      infiniteScroll.complete();
      if(data.data.page.records.length == 0){
        infiniteScroll.enable(false);
        this.nullData = true;
      }
    })
  }
  
}