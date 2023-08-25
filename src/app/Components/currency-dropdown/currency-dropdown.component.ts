import { Component, OnInit } from '@angular/core';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss'],
})
export class CurrencyDropdownComponent implements OnInit {
  public currencyList = [];

  basePath = '';
  heroForm!: FormGroup;

  constructor(
    private currencyservice: GetcurrencyService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCurrencyList();

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
