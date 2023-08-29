import { Component, ViewChild } from '@angular/core';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-compare-card',
  templateUrl: './compare-card.component.html',
  styleUrls: ['./compare-card.component.scss'],
})
export class CompareCardComponent {
  @ViewChild('currInput') currInput:any;
  res1!: number;
  res2!: number;

  // fromCurrency: any;
  // toCurrency: any;
  // amount: any;
  // convertionRates: any;

  constructor(private getcurrencyService: GetcurrencyService) {}
  onCompare() {
    const inputValue= this.currInput.nativeElement.value;
    const fromCurr= localStorage.getItem('from')
    const tarOne= localStorage.getItem('tarOne')
    const tarTwo= localStorage.getItem('tarTwo')


    this.getcurrencyService.compareCurrency(fromCurr, tarOne, tarTwo, inputValue).subscribe((res) => {
     this.res1=res.conversion_rate;
     this.res2=res.conversion_rate;

    })

  }

}
