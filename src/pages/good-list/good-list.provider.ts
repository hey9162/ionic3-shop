import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { API_URL } from "../../app/app.tokens";

@Injectable()
export class GoodListProvider {
  listPath = `/ceshi/product/prolist`;

  constructor(
    private http: Http,
    @Inject(API_URL) public apiUrl
  ) { }

  /**
   * @param {number} [pageNo=1] 页数
   * @param {string} [type] 商品分类的类型
   * @param {number} [delay=300] 延时时间
   * @param {id} [id] 商品分类id
   */
  takeData(
    pageNo: number = 1,
    type?: string,
    delay: number = 300,
    id?: number|string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.listPath}?pageNo=${pageNo}&type=${type}&id=${id}`, Option)
      .delay(delay)
      .map(res => res.json().data);
  }

  // 商品列表 左侧分类菜单
  getClassifyMenuData(): Observable<any> {
    return this.http.post(`${this.apiUrl}/ceshi/product/category`, Option)
      .map(res => res.json().data);
  }

  searchData(pageNo: number = 1, proName: string, type: string) {
    return this.http.post(`${this.apiUrl}${this.listPath}?pageNo=${pageNo}&proName=${proName}&type=${type}`, Option)
      .map(res => res.json().data);
  }

}
