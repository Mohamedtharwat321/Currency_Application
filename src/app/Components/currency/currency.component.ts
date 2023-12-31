import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICurrency } from 'src/app/interfaces/currency.model';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit, OnChanges {
  myFave!: any;
  @Input() currency!: ICurrency;
  @Input() isCheckbox: boolean = false;
  @Output() onSelect: EventEmitter<ICurrency> = new EventEmitter();
  vauleRate: any;
  @Input() from = false;
  @Input() to = false;


  constructor(private currencyservice: GetcurrencyService) { }
  ngOnInit(): void {
    this.myFave = localStorage.getItem('myFav');
  }
  ngOnChanges(changes: SimpleChanges): void {
    const from = localStorage.getItem('from')
    this.currencyservice.getFav(from, this.currency.code).subscribe((res) => {
      this.vauleRate = res.conversion_rate
    }

    )
    
  }

}
