import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { data } from '../data';
import { ApiResponse } from '../model/api-responses';
// import { HttpService } from './model/Httpservice';
import { map } from 'rxjs';
import { CoffeeDataResponse, CoffeeListView } from '../model/data.model';
let resdata:any;

@Injectable()

export class ConfigService {
  configUrl: string = 'http://localhost:8000/coffees';
  // configUrl: string = 'https://random-data-api.com/api/appliance/random_appliance?size=3';
  constructor(private http: HttpClient) {

  }
  getData() {
    return this.http.get<CoffeeDataResponse>(this.configUrl)
    .pipe(
      map((res: any) => {
        // console.log('res---->', res);
          if (res) {
            return resdata = { data: res };
          } else {
            throw this.getError(res);
          }
      })
    );
  }

  isSuccess(res: ApiResponse): boolean | undefined {
    return res && res.status && res.status.sucess;
  }
  getError(res: ApiResponse): string {
    return res && res.status && res.status.details && res.status.details.length > 0 ?
      res.status.details[0].statusCode : res;
  }

  saveData(data: any) {
    resdata = resdata.data.map((item: CoffeeListView) => {
      if (item.id === data.ID) {
        item = { ...data };
      }
      return item;
    });
  }

  getDetailData(id: number) {
    return resdata && resdata.data.find((item: CoffeeListView) => item.id === id) || {};
  }
}
