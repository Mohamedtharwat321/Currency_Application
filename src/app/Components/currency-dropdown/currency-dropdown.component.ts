import { Component, OnInit, Input } from '@angular/core';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICurrency } from 'src/app/interfaces/currency.model';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss'],
})
export class CurrencyDropdownComponent implements OnInit {
  myFave!: any;
  currencyList: ICurrency[] = [];

  basePath = '';
  heroForm!: FormGroup;

  @Input()from=false;
  @Input()to=false;
  @Input()fromCurr=false;
  @Input()tarOne=false;
  @Input()tarTwo=false;

  constructor(
    private currencyservice: GetcurrencyService,
    private fb: FormBuilder
  ) { }
  get srcCountry() {
    return this.heroForm.get('heroId')
  }
  ngOnInit(): void {
    this.currencyList = this.currencyservice.currencies;
    this.basePath = window.location.host.includes('localhost')

      ? ''
      : '/ng-select';
    this.heroForm = this.fb.group({
      heroId: 'country',
      agree: null,
    });
  }

  changeFn(val:any){
    if(this.from){
      localStorage.setItem('from',val);
    }
    if (this.to) {
      localStorage.setItem('to',val);
    }
    if (this.fromCurr) {
      localStorage.setItem('fromCurr',val);
    }
    if (this.tarOne) {
      localStorage.setItem('tarOne',val);
    }
    if (this.tarTwo) {
      localStorage.setItem('tarTwo',val);
    }

  }
}
