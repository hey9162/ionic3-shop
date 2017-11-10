import { Component,Input } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';

import { SwiperPage } from '../../pages/swiper/swiper';

@Component({
  selector: 'page-good-comment',
  templateUrl: 'good-comment.html',
})
export class GoodCommentPage {
  @Input() commentData : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public app: App
  ) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodCommentPage');
  }
  goToSwiper(data:any,i:number){
    this.app.getRootNav().push(SwiperPage,{data:data,index:i});
  }
  
}
