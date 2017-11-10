import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../../pages/detail/detail'

@Component({
  selector: 'good-li',
  templateUrl: 'good-li.html',
})
export class GoodLiPage {
  @Input() goodsList: any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  goToDetail(goodData: any){
    //detailId 对应app.module  :detailId
    this.navCtrl.push(DetailPage, { detailId: goodData.id});
  }

}
