import { Component, OnInit} from '@angular/core';
import { Currency } from 'src/app/interfaces/Icurruncey';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit{
  myFave!:any;
  public currencyList: Currency[] = [ {
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
  
  constructor(
    private currencyservice: GetcurrencyService,
  ) {}
  ngOnInit(): void {
   this.myFave = localStorage.getItem('myFav')
    // this.getCurrencyList();
  }
  getCurrencyList() {
    this.currencyservice.getCurrency().subscribe((result: any) => {
      this.currencyList = result;
      console.log(result);
    });
  }

}
