import { Component, OnInit } from '@angular/core';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Currency } from 'src/app/interfaces/Icurruncey';


@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss'],
})
export class CurrencyDropdownComponent implements OnInit {
  myFave!:any;
  public currencyList: Currency[] = [ {
    code: "USD",
   name: "US Dollar",
   flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
  },
  {
    code: "EUR",
    name: "Euro",
    flag_url: "https://images.app.goo.gl/NkNaQdTSG9gDVAP98"
  },
  {
    code: "GBP",
    name: "Sterling Pound",
    flag_url: "https://images.app.goo.gl/KcZfVo8g4qSA7hLs7"
  },
  {
    code: "AED",
    name: "UAE Dirham",
    flag_url: "https://images.app.goo.gl/YwhCFXpdL1dgHriS9"
  },
  {
    code: "BHD",
    name: "Bahrain Dinar",
    flag_url: "https://images.app.goo.gl/Fn1bnJrYcMHgeqkAA"
  },
  {
    code: "JPY",
    name: "Japan Yen",
    flag_url: "https://images.app.goo.gl/CYm1odeXcNdgMJck9"
  },
  {
    code: "KWD",
    name: "Kuwait Dinar",
    flag_url: "https://images.app.goo.gl/CUyA7dP6iq7gbbc17"
  },
  {
    code: "OMR",
    name: "Oman Riyal",
    flag_url: "https://images.app.goo.gl/KZp9EgUSyJg2fkHJ6"
  },
  {
    code: "QAR",
    name: "Qatari Riyal",
    flag_url: "https://images.app.goo.gl/pPCMT54fkxeXrmvn9"
  },
  {
    code: "SAR",
    name: "Saudi Riyal",
    flag_url: "https://images.app.goo.gl/qP5B9xY1yf5BY7mSA"
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
