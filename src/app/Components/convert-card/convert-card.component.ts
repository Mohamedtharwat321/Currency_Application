import { Component, ViewChild,ElementRef } from '@angular/core';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-convert-card',
  templateUrl: './convert-card.component.html',
  styleUrls: ['./convert-card.component.scss']
})
export class ConvertCardComponent {
  @ViewChild('currInput') currInput:any;
  res!: number;
  constructor(private getcurrencyService: GetcurrencyService) {
  }

  onConvert() {
    const inputValue= this.currInput.nativeElement.value;
    const fromCurr= localStorage.getItem('from')
    const toCurr= localStorage.getItem('to')

    this.getcurrencyService.covertCurrency(fromCurr, toCurr, inputValue).subscribe((res) => {
     this.res=res.conversion_rate;

    })

  }
}