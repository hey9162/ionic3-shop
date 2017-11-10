import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import { API_URL } from '../../app/app.tokens';

import { AddCommentPage } from '../add-comment/add-comment';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  segment: string = '';
  datas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http,
  @Inject(API_URL) public apiUrl ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage'); 
    let data = this.navParams.data.state;
    this.segment = data;
    this.getData(data);
  }

  getData(state?:any){
    this.http.post(`${this.apiUrl}/ceshi/order/index?status=${state}`,Option).subscribe(
      (res)=>{
        this.datas = res.json().data;
      }
    )
  }
  segmentChanged(value:string){
    this.getData(value);
  }
  goToComment(){
    this.navCtrl.push(AddCommentPage);
  }
}
