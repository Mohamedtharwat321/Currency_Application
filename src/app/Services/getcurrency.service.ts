import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICurrency } from '../interfaces/currency.model';

@Injectable({
  providedIn: 'root',
})
export class GetcurrencyService {
  private compareUrl = 'https://compare-test-production.up.railway.app/pair/USD/EGP/2';
  currencies: ICurrency[] = [];
  constructor(private http: HttpClient) {
  }

  public getCurrency(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(
      'https://mocki.io/v1/58d53648-9753-4e03-894f-30e0ba0395c1'
    );
  }

  covertCurrency(source: any, target: any, amount: any): Observable<any> {
    return this.http.get(`https://compare-test-production.up.railway.app/pair/${source}/${target}/${amount}`);

  }

  // compare api ------
  compareCurrency(from: any, tarOne: any, tarTwo: any, amount: any): Observable<any> {
    return this.http.get(`https://finalv99compare-production.up.railway.app/compare/${from}/${tarOne},${tarTwo}/${amount}`);

  }
}
