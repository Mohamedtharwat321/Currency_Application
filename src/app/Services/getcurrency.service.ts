import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICurrency } from '../interfaces/currency.model';

@Injectable({
  providedIn: 'root',
})
export class GetcurrencyService {
  private compareUrl='https://compare-test-production.up.railway.app/pair/USD/EGP/2'
  constructor(private http: HttpClient) {}

  public getCurrency(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(
      'https://mocki.io/v1/58d53648-9753-4e03-894f-30e0ba0395c1'
    );  
  }

  compareCurrency(source: string, target: string, amount: number , convRate: number): Observable<any> {
    const params = { source, target, amount, convRate};
    return this.http.get(this.compareUrl, { params });
  }
}
