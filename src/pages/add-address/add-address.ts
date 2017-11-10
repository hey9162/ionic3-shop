import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MultiPickerModule } from 'ion-multi-picker';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { API_URL } from '../../app/app.tokens'

@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {
  address: object = {
		name: '',
		phone: '',
		area: '',
		address: ''
	};
  default = '1 1-2 1-2-2';
  simpleColumns:any;
  dependentColumns:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
	public http: Http,
  @Inject(API_URL) public apiUrl) {

    this.dependentColumns = [
			{
				// columnWidth: '100px',
				options: [
					{ text: '1', value: '1' },
					{ text: '2', value: '2' }]
			},
			{
				// columnWidth: '100px',
				options: [
					{ text: '1-1', value: '1-1', parentVal: '1' },
					{ text: '1-2', value: '1-2', parentVal: '1' },
					{ text: '1-3', value: '1-3', parentVal: '1' },
					{ text: '1-4', value: '1-4', parentVal: '1' },

					{ text: '2-1', value: '2-1', parentVal: '2' },
					{ text: '2-2', value: '2-2', parentVal: '2' },
					{ text: '2-3', value: '2-3', parentVal: '2' },
					{ text: '2-4', value: '2-4', parentVal: '2' },],
			},
			{
				// columnWidth: '100px',
				options: [
					{ text: '1-1-1', value: '1-1-1', parentVal: '1-1' },
					{ text: '1-1-2', value: '1-1-2', parentVal: '1-1' },
					{ text: '1-1-3', value: '1-1-3', parentVal: '1-1' },
					{ text: '1-1-4', value: '1-1-4', parentVal: '1-1' },
					{ text: '1-2-1', value: '1-2-1', parentVal: '1-2' },
					{ text: '1-2-2', value: '1-2-2', parentVal: '1-2' },
					{ text: '1-2-3', value: '1-2-3', parentVal: '1-2' },
					{ text: '1-2-4', value: '1-2-4', parentVal: '1-2' },
					{ text: '1-3-1', value: '1-3-1', parentVal: '1-3' },
					{ text: '1-3-2', value: '1-3-2', parentVal: '1-3' },
					{ text: '1-3-3', value: '1-3-3', parentVal: '1-3' },
					{ text: '1-3-4', value: '1-3-4', parentVal: '1-3' },
					{ text: '1-4-1', value: '1-4-1', parentVal: '1-4' },
					{ text: '1-4-2', value: '1-4-2', parentVal: '1-4' },
					{ text: '1-4-3', value: '1-4-3', parentVal: '1-4' },
					{ text: '1-4-4', value: '1-4-4', parentVal: '1-4' },

					{ text: '2-1-1', value: '2-1-1', parentVal: '2-1' },
					{ text: '2-1-2', value: '2-1-2', parentVal: '2-1' },
					{ text: '2-1-3', value: '2-1-3', parentVal: '2-1' },
					{ text: '2-1-4', value: '2-1-4', parentVal: '2-1' },
					{ text: '2-2-1', value: '2-2-1', parentVal: '2-2' },
					{ text: '2-2-2', value: '2-2-2', parentVal: '2-2' },
					{ text: '2-2-3', value: '2-2-3', parentVal: '2-2' },
					{ text: '2-2-4', value: '2-2-4', parentVal: '2-2' },
					{ text: '2-3-1', value: '2-3-1', parentVal: '2-3' },
					{ text: '2-3-2', value: '2-3-2', parentVal: '2-3' },
					{ text: '2-3-3', value: '2-3-3', parentVal: '2-3' },
					{ text: '2-3-4', value: '2-3-4', parentVal: '2-3' },
					{ text: '2-4-1', value: '2-4-1', parentVal: '2-4' },
					{ text: '2-4-2', value: '2-4-2', parentVal: '2-4' },
					{ text: '2-4-3', value: '2-4-3', parentVal: '2-4' },
					{ text: '2-4-4', value: '2-4-4', parentVal: '2-4' }]
			}
		];

  }
  ionViewWillEnter() {
  }
  ionViewDidLoad() {
		if(this.navParams.data.data){
			this.address = this.navParams.data.data;
		}
	console.log('ionViewDidLoad AddAddressPage');
  };
  doSave(){
	console.log(this.address);
	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
	let params = new URLSearchParams();
	let x;
	for ( x in this.address ) {
		params.append(`${x}`, this.address[x] );
	}
	let body = params.toString();
	let options = new RequestOptions({ headers: headers });
	console.log(body);
	this.http.post(`${this.apiUrl}/ceshi/product/addoredit`,body,options).subscribe(
		(res) => {
			if(res.json().code == 12000){
				this.navCtrl.pop();
			}
		}
	)
	};
}
