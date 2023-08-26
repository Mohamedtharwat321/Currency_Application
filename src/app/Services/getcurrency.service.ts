import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable} from 'rxjs';
import { Currency } from '../interfaces/Icurruncey';

@Injectable({
  providedIn: 'root',
})
export class GetcurrencyService {
  constructor(private http: HttpClient) {}

  public getCurrency() : Observable<Currency[]> {
    return this.http.get<Currency[]>('https://api.currencyfreaks.com/v2.0/supported-currencies')
  }
}
