import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopupCardComponent } from './popup-card/popup-card/popup-card.component';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public currencyList = [];
  
  constructor(
    private currencyservice: GetcurrencyService,
  ) {}
  ngOnInit(): void {
    this.getCurrencyList();
  }
  getCurrencyList() {
    this.currencyservice.getCurrency().subscribe((result: any) => {
      this.currencyList = result;
      console.log(result);
    });
  }
}

