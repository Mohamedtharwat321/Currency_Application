import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Currency } from 'src/app/interfaces/Icurruncey';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  myFave!: any;

  constructor() {}
  ngOnInit(): void {
    this.myFave = localStorage.getItem('myFav');
    // this.getCurrencyList();
  }
  
}
