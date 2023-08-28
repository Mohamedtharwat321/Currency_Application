import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopupCardComponent } from './popup-card/popup-card/popup-card.component';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';
import { Currency } from 'src/app/interfaces/Icurruncey';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public currencyList:Currency[] = [];
  
  constructor(
    private currencyservice: GetcurrencyService,
  ) {}
  ngOnInit(): void {
    this.getCurrencyList();
  }
  getCurrencyList() {
    this.currencyList = [ {
      code: "USD",
     name: "US Dollar",
     flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "EUR",
      name: "Euro",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "GBP",
      name: "Sterling Pound",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "AED",
      name: "UAE Dirham",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "BHD",
      name: "Bahrain Dinar",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "JPY",
      name: "Japan Yen",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "KWD",
      name: "Kuwait Dinar",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "OMR",
      name: "Oman Riyal",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "QAR",
      name: "Qatari Riyal",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    },
    {
      code: "SAR",
      name: "Saudi Riyal",
      flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    }];

    // this.currencyservice.getCurrency().subscribe((result: any) => {
    //   this.currencyList = result;
    //   console.log(result);
    // });
  }
  getSelectedCurrency(c:Currency){
    console.log(c);
  }
}

