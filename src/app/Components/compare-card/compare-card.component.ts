import { Component } from '@angular/core';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';
import { ICurrency } from 'src/app/interfaces/currency.model';

@Component({
  selector: 'app-compare-card',
  templateUrl: './compare-card.component.html',
  styleUrls: ['./compare-card.component.scss'],
})
export class CompareCardComponent {

  // fromCurrency: any;
  // toCurrency: any;
  // amount: any;
  // convertionRates: any;

  constructor(private compareService: GetcurrencyService) {}

  // convertCurrency() {
  //   if (!this.fromCurrency || !this.toCurrency || !this.amount) {
  //     return;
  //   }
  //   this.compareService
  //     .compareCurrency(
  //       this.fromCurrency,
  //       this.toCurrency,
  //       this.amount,
  //       this.convertionRates
  //     )
  //     .subscribe((response) => {
  //       this.x = response.conversionRates;
  //     });
  // }
}
