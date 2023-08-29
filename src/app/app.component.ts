import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { GetcurrencyService } from './Services/getcurrency.service';
import { ICurrency } from './interfaces/currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('crossfadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }), // Initial state
        animate('0.5s ease', style({ opacity: 1 })), // Final state
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
currencyList!:ICurrency[];
  //switch between 2 components
  currentComponent: string = 'componentconvert';


  //toggle between 2 buttons
  buttonConvertActive: boolean = true;
  buttonCompareActive: boolean = false;

  constructor(private currencyservice:GetcurrencyService){}

  ngOnInit(): void {
    this.getCurrencyList();
  }
  toggleButtons(buttonClicked: string) {
    if (buttonClicked === 'buttonconvert') {
      this.buttonConvertActive = true;
      this.buttonCompareActive = false;
    } else if (buttonClicked === 'buttoncompare') {
      this.buttonConvertActive = false;
      this.buttonCompareActive = true;
    }
  }

  getCurrencyList() {
    this.currencyservice.getCurrency().subscribe((result: any) => {
      this.currencyList = result.currencies;
      this.currencyservice.currencies = result.currencies;
    });
  }
  
}
