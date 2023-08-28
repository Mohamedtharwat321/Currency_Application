import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable} from 'rxjs';
import { ICurrency } from '../interfaces/currency.model';

@Injectable({
  providedIn: 'root',
})
export class GetcurrencyService {
  constructor(private http: HttpClient) {}

  public getCurrency() : Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>('https://api.currencyfreaks.com/v2.0/supported-currencies')
  }
}
