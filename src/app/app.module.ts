import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { API_URL } from "./app.tokens";

import { DynFormsModule } from "../components/dyn-forms/dyn-forms.module";

// 寺庙
import { ApplyConvertPage } from "../pages/apply-convert/apply-convert";
import { ApplyConvertFormService } from "../providers/apply-convert-form.service";
// 商城
import { CartPage } from '../pages/cart/cart';
import { GoodListPage } from '../pages/good-list/good-list';
import { ClassifyMenuPage } from "../pages/classify-menu/classify-menu";
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
import { GoodLiPage } from '../pages/good-li/good-li';
import { DetailPage } from '../pages/detail/detail';
import { NullGoodPage } from '../pages/null-good/null-good';
import { GoodCommentPage } from '../pages/good-comment/good-comment';
import { GoodDetailPage } from '../pages/good-detail/good-detail';
import { GoodParamPage } from '../pages/good-param/good-param';
import { SwiperPage } from '../pages/swiper/swiper';
import { PayPage } from '../pages/pay/pay';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { OrderPage } from'../pages/order/order';
import { AddressPage } from '../pages/address/address';
import { AddAddressPage } from '../pages/add-address/add-address';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoodsDataProvider } from '../providers/goods-data/goods-data';
import { UserService } from '../providers/user.service';
import { AddCommentPage } from '../pages/add-comment/add-comment';
// select
import { MultiPickerModule } from 'ion-multi-picker';
//up-img
// import { CommonModule }     from '@angular/common';
// import { FileUploadModule } from 'ng2-file-upload';

//路由
// import { AppRoutingModule }     from './app-routing.module';

const DECLARE_COMPONENT = [
  // 商城
  MyApp,
  GoodLiPage,
  CartPage,
  GoodListPage,
  ClassifyMenuPage,
  HomePage,
  TabsPage,
  UserPage,
  DetailPage,
  NullGoodPage,
  GoodCommentPage,
  GoodDetailPage,
  GoodParamPage,
  NullGoodPage,
  SwiperPage,
  PayPage,
  EditUserPage,
  OrderPage,
  AddressPage,
  AddAddressPage,
  AddCommentPage,
  // 寺庙
  ApplyConvertPage
];

@NgModule({
  declarations: [
    ...DECLARE_COMPONENT,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DynFormsModule,
    MultiPickerModule,
    // AppRoutingModule,
    // CommonModule,
    // FileUploadModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true'
    },
    {
      links: [
        {component: TabsPage,name:'TabsPage',segment: 'tabs-page'},
        {component: CartPage,name: 'CartPage', segment: 'cart-page'},
        {component: GoodListPage,name: 'ListPage', segment: 'list-page'},
        {component: UserPage,name: 'UserPage', segment: 'user-page'},
        {component: HomePage,name: 'HomePage', segment: 'home-page'},
        {component: DetailPage,name: 'DetailPage', segment: 'detail/:detailId'},
        { component: PayPage, name: 'pay', segment: 'pay'},
        { component: OrderPage, name: 'OrderPage', segment: 'order/:state'},
        { component: AddCommentPage, name: 'AddCommentPage', segment: 'comment-page'},
        { component: AddAddressPage, name: 'AddAddressPage', segment: 'addAddress-page'},
        { component: AddressPage, name: 'AddressPage', segment: 'address-page'}
      ]
    }
  ),
    IonicStorageModule.forRoot()
  ],
  entryComponents: [
    ...DECLARE_COMPONENT
  ],
  providers: [
    {
      provide: API_URL,
      useValue: `http://api.pengpeng.bpiao.com/ERP-Web`
    },
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    StatusBar,
    SplashScreen,
    GoodsDataProvider,
    ApplyConvertFormService,
    UserService,
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
