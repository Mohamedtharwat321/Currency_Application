import { Component, OnInit } from '@angular/core';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICurrency } from 'src/app/interfaces/currency.model';


@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss'],
})
export class CurrencyDropdownComponent implements OnInit {
  myFave!:any;
  public currencyList: ICurrency[] = [ {
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

  basePath = '';
  heroForm!: FormGroup;

  constructor(
    private currencyservice: GetcurrencyService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.getCurrencyList();

    this.basePath = window.location.host.includes('localhost')
      ? ''
      : '/ng-select';
    this.heroForm = this.fb.group({
      heroId: 'country',
      agree: null,
    });
  }

  getCurrencyList() {
    this.currencyservice.getCurrency().subscribe((result: any) => {
      this.currencyList = result;
      console.log(result);
    });
  }
}
