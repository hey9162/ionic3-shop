import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-good-param',
  templateUrl: 'good-param.html',
})
export class GoodParamPage {
  @Input() paramData : any;
  @Output() param = new EventEmitter<string>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodParamPage');
  }
//test
  paramFn(){
    this.param.emit("我是param组件的");
  }
}
