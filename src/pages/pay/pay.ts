import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
  totalData: number = 0;
  mustData: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
    this.totalData = this.navParams.data.data.data[1];
    this.mustData = this.totalData - 0;
  }
}
