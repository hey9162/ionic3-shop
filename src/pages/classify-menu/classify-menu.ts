import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Events } from "ionic-angular";
import { Storage } from '@ionic/storage';

import { GoodListProvider } from "../good-list/good-list.provider";

@Component({
  selector: 'page-classify-menu',
  template: `
    <section class="menu-active">
      <div class="menu-li" tappable (click)="menuClick($event, objectIcon, '')">
        <span>全部</span>
        <p #objectIcon class="object-icon">
          <ion-icon name="logo-apple" color="primary"></ion-icon>
        </p>
      </div>
    </section>
    <section *ngFor="let button of data">
      <div class="menu-li" *ngFor="let item of button;let b = index;"
        tappable (click)="menuClick($event, objectIcon, item.id)">
        <span>{{ item.name }}</span>
      </div>
    </section>
  `,
  providers: [
    GoodListProvider,
  ]
})
export class ClassifyMenuPage {
  data: any[] = [];

  constructor(
    public listProvider: GoodListProvider,
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private storage: Storage,
    private events: Events
  ) {
    this.getClassifyMenuData();
  }

  getClassifyMenuData() {
    this.listProvider.getClassifyMenuData()
      .subscribe(data => {
        this.data = data;
      });
  }

  menuClick($event, icon, id) {
    $event.stopPropagation();
    const parentElem = $event.target.parentElement;
    const sectionAll = this.elementRef.nativeElement.querySelectorAll('section');

    this._removeClass(sectionAll, 'menu-active');
    this.renderer2.addClass(parentElem, 'menu-active');
    this.renderer2.appendChild($event.target, icon);
    this.storage.get('classifyType').then((type) => {
      type && this.menuEvents(type, id);
    });
  }

  menuEvents(type: string, id: number|string) {
    this.listProvider.takeData(1, type, 300, id).subscribe(data => {
      if (data) {
        this.events.publish('menu:getData', data['records']);
        // this.events.publish('menu:getData', [{
        //   "id" : 120,
        //   "name" : "蓬裙",
        //   "price" : 100.0,
        //   "cover" : "http://pingp.img-cn-shanghai.aliyuncs.com/dudu/2017091513255968489369.png",
        //   "evaluate" : 0,
        //   "sales" : 0,
        //   "attr" : null
        // }, {
        //   "id" : 134,
        //   "name" : "牛仔外套",
        //   "price" : 100.0,
        //   "cover" : "http://pingp.img-cn-shanghai.aliyuncs.com/dudu/2017081410514987686003.png",
        //   "evaluate" : 0,
        //   "sales" : 0,
        //   "attr" : null
        // }]);
      }
    });
  }

  private _removeClass(nodeList, className: string) {
    for (let i = 0, len = nodeList.length; i < len; i++) {
      this.renderer2.removeClass(nodeList[i], className);
    }
  }

}
