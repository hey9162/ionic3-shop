import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,URLSearchParams,RequestOptions,Headers } from '@angular/http';

import { UserService } from '../../providers/user.service'
@Component({
  selector: 'page-add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentPage {
  listUrl:string[] = [];
  score: Number = 4;
  starts: Number[] = [1,2,3,4,5];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http,public userService: UserService) { 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCommentPage');
  }
  upImgs(event){
    let file = event.target.files[0];
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;'});
    let options = new RequestOptions({ headers: headers });
    let params = new URLSearchParams();
    let reader = new FileReader();
    this.userService.presentLoadingDefault();
    reader.readAsDataURL(file);
    reader.onload = (event:any) => {
      let src = event.target.result;
      src = src.toString().substring(src.indexOf(",") + 1);
      params.append("stream",src);
      let body = params.toString();
      this.http.post(`http://api.pengpeng.bpiao.com/ERP-Web/h5/upload/index`,body,options).
      subscribe((res: any)=>{
        console.log(this.listUrl);
        this.listUrl.push(res._body);
        this.userService.presentLoadingDismiss();
      });
    }
  }

  starScore(num:Number){
    this.score = num;
  }
}
