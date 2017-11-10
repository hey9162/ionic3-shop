import { Component, Renderer2, Inject,ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController,App } from 'ionic-angular';

import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import { GoodCommentPage } from '../../pages/good-comment/good-comment';
import { GoodDetailPage } from '../../pages/good-detail/good-detail';
import { GoodParamPage } from '../../pages/good-param/good-param';
import { CartPage } from '../../pages/cart/cart';

import { UserService } from '../../providers/user.service';

import { API_URL } from '../../app/app.tokens'

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  private param;
  isChecked: number;
  isActive: string;
  detail: any = '1';
  datailData: any;
  test;
  pageNo: number = 1;
  commentData: any;
  paramData: any;
  showModel: boolean = false;
  showMask: boolean = true;
  images: string[];
  product: any;
  card: any;
  space: string[] = [];
  index: number[] = [];
  @ViewChild(GoodDetailPage) child:GoodDetailPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private renderer: Renderer2,
    public alertCtrl: AlertController,
    public userService: UserService,
    public http: Http,
    public app: App,
    @Inject(API_URL) public apiUrl) {
    this.test = '商品详情'
  }
  ionViewWillEnter() {
    this.getData();
    this.father()
  }
  getData(disable?: boolean) {
    let id = this.navParams.data.detailId;
    this.http.post(
      `${this.apiUrl}/ceshi/product/detail?proId=${id}&pageNo=${this.pageNo}`, Option)
      .subscribe((res) => {
        let resData = res.json();
        this.images = resData.data.imgs;
        this.product = resData.data.product;
        this.datailData = this.product.remark;
        let attrTitle: any;
        let detailProp: any;
        // let disable = disable
        if (resData.data.product.stockConfig) {
          attrTitle = resData.data.product.stockConfig.split(",");
        } else {
          attrTitle = ''
        }
        if (resData.data.product.attr) {
          detailProp = resData.data.product.attr.split(";");
        } else {
          detailProp = ''
        }
        let sameData = [];
        if (attrTitle.length) {
          for (let i = 0; i < attrTitle.length; i++) {
            let obj = {
              title: '',
              list: [],
            };
            obj.title = attrTitle[i];
            detailProp[i] = detailProp[i].split(",");
            for (let j = 0; j < detailProp[i].length; j++) {
              obj.list.push(
                {
                  "tit": detailProp[i][j],
                  "disable": disable
                });
            }
            sameData.push(obj);
          }
        }
        this.paramData = sameData;
        if (resData.data.evaluationlist.records.imgs) {
          resData.data.evaluationlist.records.imgs = resData.data.evaluationlist.records.imgs.split(",");
        }
        this.commentData = resData.data.evaluationlist.records;
      })
  }

  selectItem(spec: string, index: number, j: number, event) {
    let id = this.navParams.data.detailId;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let params = new URLSearchParams();
    console.log(this.index.indexOf(j));
    if (this.index.indexOf(j) < 0) {
      this.index.push(j);
      this.space.push(spec);
    } else {
      this.space.splice(j);
      this.space.push(spec);
    }
    console.log(this.space);
    this.isChecked = index;
    this.isActive = spec;
    let peer = event.path[2].querySelectorAll('button');
    for (let i = 0; i < peer.length; i++) {
      this.renderer.removeClass(peer[i], 'active')
    }
    this.renderer.addClass(event.path[1], 'active')
    params.append("proId", id);
    for (let i = 0; i < this.space.length; i++) {
      params.append("config[]", this.space[i]);
    }
    let body = params.toString();
    console.log(body);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      `${this.apiUrl}/ceshi/product/stockconfig`, body, options).subscribe(
      (res) => {
        let data = res.json();
        let list = data.data;
        // let str = '';
        // let arr = [];
        // for(let i = 0; i < list.length; i++){
        //   str += list[i].attr + '/';
        // }
        // arr = str.split("/");
        // arr = this.unique(arr);
        // console.log(arr);
        // for(let n = 0; n < this.paramData.length; n++){
        //   if(n == j){
        //     continue;
        //   }
        //   for(let x = 0; x < this.paramData[n].list.length; x++){
        //       let value = this.paramData[n].list[x].tit;
        //       if(arr.indexOf(value)<0){
        //         this.paramData[n].list[x].disable = true;
        //       }
        //     }
        // }
        console.log(list);
      }

      )
  }

  unique(arr) {
    var newArr = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
      　　　　if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  joInCart() {
    this.showMask = false;
    this.showModel = true;
  }
  joInCartConfirm() {
    let id = this.navParams.data.detailId;
    let stockId = 0
    return this.http.post(
      `${this.apiUrl}/ceshi/product/addcart?proId=${id}&num=1&stockId=${stockId}`, Option).subscribe(
      (res) => {
        let data = res.json();
        if (data.code == 12000) {
          this.userService.showAlert('加入购物车成功')
          this.showMask = true;
          this.showModel = false;
        }
      }
      )
  }
  closeCart() {
    this.showMask = true;
    this.showModel = false;
  }
  goToCart() {
    this.navCtrl.push(CartPage);
  }

  // test
  bar(event:any){
    console.log(event);
  }
  father(){
    console.log(this.child.test);
  }
  // test
  detailFn(event:any){
    console.log(event);
    this.param = event;
  }
}
