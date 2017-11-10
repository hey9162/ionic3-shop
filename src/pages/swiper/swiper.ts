import { Component,ViewChild,OnInit } from '@angular/core';
import { NavController, NavParams,Slides } from 'ionic-angular';
@Component({
  selector: 'page-swiper',
  templateUrl: 'swiper.html',
})
export class SwiperPage {

  @ViewChild("slides") slides: Slides;
  imgUrl: any;
  index: number;
  // show: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.index = this.navParams.data.index;
    this.imgUrl = this.navParams.data.data;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SwiperPage');
  }
  ionViewDidEnter(){  
    this.slides.slideTo(this.index);
    // this.show = false;
  }


  goToBack(){
    this.navCtrl.pop();
  }

}
