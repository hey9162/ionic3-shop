import { Injectable } from '@angular/core';
import { Platform, AlertController, LoadingController } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserService {

    loading: any = null;

    public _user: any;

    constructor(public http: Http, public Platform: Platform, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
        
       
    }

    showAlert(subTitle) {
        let alert = this.alertCtrl.create({
            title: '商城提示',
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    }

    presentLoadingDefault() {
        this.loading = this.loadingCtrl.create({
            content: '正在加载中...'
        });
        this.loading.present();
    }

    presentLoadingDismiss() {
        this.loading.dismiss();
    }

}
