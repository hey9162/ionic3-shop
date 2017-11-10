import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { GoodListPage } from '../good-list/good-list';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';


@Component({
  templateUrl: 'tabs.html',
  providers: [
    GoodListPage
  ]
})
export class TabsPage {
  
  tab1Root = HomePage;
  tab2Root = GoodListPage;
  tab3Root = CartPage;
  tab4Root = UserPage;

  constructor(navParams: NavParams) {
    console.log(navParams.data.tabIndex);
  }
}
