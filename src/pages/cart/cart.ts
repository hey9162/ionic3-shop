import { Component,ChangeDetectorRef  } from '@angular/core';
import { NavController,App } from 'ionic-angular';


import { PayPage } from '../../pages/pay/pay'

import { Http,URLSearchParams,RequestOptions,Headers } from '@angular/http';

import { UserService } from '../../providers/user.service'

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  data: string[] = [];
  leng: number;
  checkedArr: string[] = [];
  selectAll: boolean = true;
  total: number = 0;
  constructor(public navCtrl: NavController,
   public cd: ChangeDetectorRef,
   public userService : UserService,
   public app : App,
   public http: Http) {
    this.getData ();
  }
  getData(){
    this.userService.presentLoadingDefault();
    this.http.post(`http://api.pengpeng.bpiao.com/ERP-Web/ceshi/cart/index`,Option).subscribe((res)=>{
      var data = res.json();
      for(let i = 0;i < data.data.length; i++ ){
        data.data[i]["state"] = true
      }
      this.data = data.data;
      console.log(this.data);
      this.leng = this.data.length;
      // for(let i = 0; i < this.data.length; i++ ){
      //   this.checkedArr.push(this.data[i]["id"])
      // }
      this.userService.presentLoadingDismiss();
      this.countMoney();
    })
  }
  deleteData(list){
    this.http.post(`http://api.pengpeng.bpiao.com/ERP-Web/ceshi/cart/delete?shopCarId=${list.id}`,Option).subscribe((res)=>{
      var data = res.json();
      console.log(data);
      if(data.code = 12000){
        let index = this.data.indexOf(list);
        this.data.splice(index,1)
        this.leng--;
        this.countMoney()
      }else{
        alert("删除失败")
      }
    })
  }
  changenum(list,state){
    if(state == 0 && list.number > 0){
      list.number--;
    }
    if(state == 1){
      list.number++;
    }
    if(list.state){
      this.countMoney()
    }
  }
  // singleChange(event,id){
  //   if(event.checked){
  //     this.checkedArr.push(id);
  //   }else{
  //     let index = this.checkedArr.indexOf(id);
  //     this.checkedArr.splice(index,1)
  //   }
  //   if(this.checkedArr.length == this.leng){
  //     this.selectAll = true;
  //   }else{
  //     this.selectAll = false;
  //   }
  //   console.log(this.checkedArr);
  // }
  totalChange(m){
    for(var i=0;i<this.data.length;i++){  
      if(m===true){  
        this.data[i]["state"] = true;  
      }else {  
        this.data[i]["state"] = false;  
      }  
    } 
  }

  countMoney(){
    this.total = 0;
    for(let i = 0; i < this.data.length; i++ ){
      if(this.data[i]["state"] == true){
        this.total += (this.data[i]["noConfigPrice"]*this.data[i]["number"]);
      }
    }
  }


  settlement(data){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let params = new URLSearchParams();
    for(let i = 0; i < data.length; i++){
      if( data[i].state ){
        params.append("shopids[]",data[i].id);
      }
    }
    let body = params.toString();
    let options = new RequestOptions({ headers: headers });
    this.http.post(`http://api.pengpeng.bpiao.com/ERP-Web/ceshi/cart/account`,body,options).subscribe((res)=>{
      let data = res.json();
      if(data.code = 12000){
        let param = data;
        this.navCtrl.push(PayPage,{data:param})
      }else{
        alert("失败")
      }
    })
  }
}
