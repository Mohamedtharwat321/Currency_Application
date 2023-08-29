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
  myFave!: any;
  currencyList: ICurrency[] = [];

  basePath = '';
  heroForm!: FormGroup;

  constructor(
    private currencyservice: GetcurrencyService,
    private fb: FormBuilder
  ) {}

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
}
