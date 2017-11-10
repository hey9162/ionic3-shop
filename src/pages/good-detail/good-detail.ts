import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GoodDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-good-detail',
  templateUrl: 'good-detail.html',
})
export class GoodDetailPage {
  @Input() datailData : any;
  @Input() param : any;
  @Output() foo = new EventEmitter<string>();
  test:string = '我是子组件的属性或方法，可以在父组件的任何地方调用'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodDetailPage');
  }
  todo(event:any){
    this.foo.emit('你好，我是子组件发送过来的')
  }
}
