import { Component, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/interfaces/currency.model';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-live-exec',
  templateUrl: './live-exec.component.html',
  styleUrls: ['./live-exec.component.scss'],
})
export class LiveExecComponent implements OnInit {
  public currencyList: ICurrency[] = [];
  portfolio: ICurrency[] = [];
  constructor(private currencyservice: GetcurrencyService) {}
  ngOnInit(): void {
    this.portfolio = JSON.parse(localStorage.getItem('portfolio') || '[]');
    this.getCurrencyList();
  }
  getCurrencyList() {
    this.currencyList = [
      {
        code: 'USD',
        name: 'US Dollar',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'EUR',
        name: 'Euro',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'GBP',
        name: 'Sterling Pound',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'AED',
        name: 'UAE Dirham',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'BHD',
        name: 'Bahrain Dinar',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'JPY',
        name: 'Japan Yen',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'KWD',
        name: 'Kuwait Dinar',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'OMR',
        name: 'Oman Riyal',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'QAR',
        name: 'Qatari Riyal',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
      {
        code: 'SAR',
        name: 'Saudi Riyal',
        flag_url:
          'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      },
    ];
    // this.currencyservice.getCurrency().subscribe((result: any) => {
    //   this.currencyList = result;
    //   console.log(result);
    // });
  }

  getSelectedCurrency(c: ICurrency) {
    if (c.selected) {
      this.portfolio.push(c);
    } else {
      this.portfolio = this.portfolio.filter((el) => el.code != c.code);
    }

    localStorage.setItem('portfolio', JSON.stringify(this.portfolio));
  }
}
