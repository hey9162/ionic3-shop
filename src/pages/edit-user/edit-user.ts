import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// 防止不安全链接被禁止
// import {DomSanitizer} from '@angular/platform-browser';  

import { Http,RequestOptions,Headers } from '@angular/http';

import { UserService } from '../../providers/user.service'
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  src:any = '/assets/images/head.png';
  petName:string = "这是名字"
  constructor(public navCtrl: NavController, public navParams: NavParams,
    // private sanitizer : DomSanitizer,
    public userService : UserService,
    public http: Http) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }
  selectedFileOnChanged(event){
    let file = event.srcElement.files[0]
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;'});
    let options = new RequestOptions({ headers: headers });
    let params = new URLSearchParams();
    
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:any) => {
      this.userService.presentLoadingDefault();
      let src = event.target.result;
      src = src.toString().substring(src.indexOf(",") + 1);
      params.append("stream",src);
      let body = params.toString();
      this.http.post(`http://api.pengpeng.bpiao.com/ERP-Web/h5/upload/index`,body,options).
      subscribe((res: any)=>{
        this.src = res._body
        this.userService.presentLoadingDismiss();
      });
    }
  }
  doSave(){
    this.userService.presentLoadingDefault();
    let name = this.petName;
    let img = this.src;
    this.http.post(`http://api.pengpeng.bpiao.com/ERP-Web/ceshi/me/edit?name=${name}&headimgurl=${img}`,Option).
    subscribe((res)=>{
      console.log(res);
      if(res.status == 200){
        this.userService.presentLoadingDismiss();
        this.navCtrl.pop();
      }
      
    });
  }

}