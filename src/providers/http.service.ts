import { Injectable } from '@angular/core';
import { Platform, AlertController, LoadingController } from 'ionic-angular';
import { Headers, Http, URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {

    loading: any = null;

    public _user: any;

    constructor(public http: Http, public Platform: Platform) {

    }
}
