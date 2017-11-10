import { Component,Inject,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddAddressPage } from '../add-address/add-address';
import { Http } from '@angular/http';

import { API_URL } from '../../app/app.tokens';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  datas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http,
  public cd: ChangeDetectorRef,
  @Inject(API_URL) public apiUrl) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }
  ionViewWillEnter() {
    this.getList()
  }
  goToAdd(list?:object){
    if(list){
      this.navCtrl.push(AddAddressPage,{data:list});
    }else{
      this.navCtrl.push(AddAddressPage);
    }
  }
  getList(){
    this.http.post(`${this.apiUrl}/ceshi/me/address`,Option).subscribe(
      (res)=>{
        this.datas = res.json().data;
      }
    )
  }
  deleteAddress(id:number){
    this.http.post(`${this.apiUrl}/ceshi/product/delete?id=${id}`,Option).subscribe(
      (res) => {
        if(res.json().code = 12000){
          this.getList()
        }
      }
    )
  }
}
