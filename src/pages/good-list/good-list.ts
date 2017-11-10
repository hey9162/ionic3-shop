import { Component, ViewChild } from '@angular/core';
import { Content, Events, InfiniteScroll } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GoodsLiData } from "../../interfaces/goods-li-data";
import { GoodListProvider } from "./good-list.provider";

@Component({
  selector: 'page-good-list',
  templateUrl: 'good-list.html',
  providers: [
    GoodListProvider
  ]
})
export class GoodListPage {
  dataList: GoodsLiData[] = [];
  // 设置默认选中
  segment: string = '1';
  // 接受滚动加载...触发后的 InfiniteScroll
  infiniteScroll: InfiniteScroll;
  segmentType: string = '1';
  hasData: boolean = false;
  // 页数
  pageNo: number = 1;

  @ViewChild(Content) content: Content;

  constructor(
    private listProvider: GoodListProvider,
    private events: Events,
    private storage: Storage,
  ) {
    this.getData('1');
    this.storage.set('classifyType', '1');
  }

  ionViewWillEnter() {
    this.events.subscribe('menu:getData', (data) => {
      this._clearStatus();
      this.dataList = data;
    });
  }

  getData(segmentType: string) {
    this.listProvider.takeData(this.pageNo, segmentType, 0)
      .subscribe((data: any) => {
        data && (this.dataList = data.records);
      });
  }

  segmentChanged(segmentValue: string) {
    // 0 秒无过度动画，否则动画会触发 infiniteScroll
    this.content.scrollToTop(0);
    this.pageNo = 1;
    this._clearStatus();
    this.segmentType = segmentValue;
    this.storage.set('classifyType', segmentValue);
    this.getData(segmentValue);
  }

  // 滚动加载...
  doInfinite(infiniteScroll: InfiniteScroll, segmentType: string) {
    this.infiniteScroll = infiniteScroll;
    this.pageNo++;
    this.listProvider.takeData(this.pageNo, segmentType, 1000)
      .subscribe((data: any) => {
        if (data) {
          let records = data.records;
          for (let i = 0; i < records.length; i++) {
            this.dataList.push(records[i]);
          }
          infiniteScroll.complete();

        }else {
          this.infiniteScroll.enable(false);
          this.hasData = true;
        }
      });
  }

  searchGoods($event: any) {
    let keyword = $event.target.value;
    if (keyword && keyword.trim() !== '') {
      this.listProvider.searchData(1, keyword, this.segmentType)
        .subscribe(data => {
          data ? (this.dataList = data['records']) : (this.dataList = []);
          this._clearStatus();
        });
    }
  }

  /**
   * @desc 
   * 用来清除一些状态：
   * 用户使用了滚动加载更多，显示没有更多了的时候，
   * 然后使用了搜索功能 或 左侧菜单点击分类查询时，
   * 没有更多文本应该隐藏掉，infiniteScroll应该重启
   */
  private _clearStatus() {
    this.hasData = false;
    this.infiniteScroll && this.infiniteScroll.enable(true);
  }

}
