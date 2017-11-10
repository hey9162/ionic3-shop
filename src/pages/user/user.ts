import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';

import { EditUserPage } from '../edit-user/edit-user';
import { OrderPage } from '../order/order';
import { AddressPage } from '../address/address'

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public app: App) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  goToEdit(){
    this.app.getRootNav().push(EditUserPage)
  }
  goToOrder(state:any){
    this.navCtrl.push(OrderPage,{state:state})
  }
  goToAddress(){
    this.navCtrl.push(AddressPage);
  }
  
}