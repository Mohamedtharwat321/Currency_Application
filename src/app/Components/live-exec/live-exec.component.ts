import { Component, OnInit, Input } from '@angular/core';
import { ICurrency } from 'src/app/interfaces/currency.model';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-live-exec',
  templateUrl: './live-exec.component.html',
  styleUrls: ['./live-exec.component.scss'],
})

export class LiveExecComponent implements OnInit {
  @Input() currencyList: ICurrency[] = [];
  portfolio: ICurrency[] = [];
  valueRate: number = 0;
  constructor(private currencyservice: GetcurrencyService) { }
  ngOnInit(): void {
    this.portfolio = JSON.parse(localStorage.getItem('portfolio') || '[]');
    console.log(this.currencyList);
  }


  getSelectedCurrency(c: ICurrency) {
    if (c.selected) {
      const from = localStorage.getItem('from')
      this.currencyservice.getFav(from, c.code).subscribe((res) => {
        this.valueRate = res.conversion_rate

      })

      this.portfolio.push(c);
    } else {
      this.portfolio = this.portfolio.filter((el) => el.code != c.code);
    }

    localStorage.setItem('portfolio', JSON.stringify(this.portfolio));
  }
}
