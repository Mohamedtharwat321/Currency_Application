import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICurrency } from 'src/app/interfaces/currency.model';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  myFave!: any;
  @Input() currency!: ICurrency;
  @Input() isCheckbox: boolean = false;
  @Output() onSelect: EventEmitter<ICurrency> = new EventEmitter();
  @Input()from=false;
  @Input()to=false;


  constructor(private currencyservice: GetcurrencyService) {}
  ngOnInit(): void {
    this.myFave = localStorage.getItem('myFav');
  }

}
