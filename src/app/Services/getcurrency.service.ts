import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetcurrencyService {
  constructor(private http: HttpClient) {}

  public getCurrency() {
    let myCurrency = this.http.get('https://api.currencyfreaks.com/v2.0/supported-currencies').pipe(map((res: any) => {
      return Object.values(res.supportedCurrenciesMap).filter(v => v)
    }));
    return myCurrency;
  }
}
