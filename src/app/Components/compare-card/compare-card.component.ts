import { Component, ViewChild } from '@angular/core';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-compare-card',
  templateUrl: './compare-card.component.html',
  styleUrls: ['./compare-card.component.scss'],
})
export class CompareCardComponent {
  @ViewChild('currInput') currInput:any;
  resOne!: number;
  resTwo!: number;
  hisham : number = 20;

  // fromCurrency: any;
  // toCurrency: any;
  // amount: any;
  // convertionRates: any;

  constructor(private getcurrencyService: GetcurrencyService) {}
  onCompare() {
    const inputValue= this.currInput.nativeElement.value;
    const fromCurr= localStorage.getItem('fromCurr')
    const tarOne= localStorage.getItem('tarOne')
    const tarTwo= localStorage.getItem('tarTwo')


    this.getcurrencyService.compareCurrency(fromCurr, tarOne, tarTwo, inputValue).subscribe((res) => {
     this.resOne=res[0].conversion_rate;
     this.resTwo=res[1].conversion_rate;
    
    })

  }
  // onCompare() {
  //   const inputValue= this.currInput.nativeElement.value;
  //   const fromCurr= localStorage.getItem('from')
  //   const toCurr= localStorage.getItem('to')

  //   this.getcurrencyService.covertCurrency(fromCurr, toCurr, inputValue).subscribe((res) => {
  //    this.resOne=res.conversion_rate;

  //   })

  // }

}
