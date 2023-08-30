import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/interfaces/currency.model';

@Component({
  selector: 'app-fav-curr',
  templateUrl: './fav-curr.component.html',
  styleUrls: ['./fav-curr.component.scss'],
})
export class FavCurrComponent {
  @Output() onSelect = new EventEmitter<ICurrency>();
  @Input() currencies: ICurrency[] = [];
  isShown!: boolean;
 

  getSelectedCurrency(currency: ICurrency) {
    this.onSelect.emit(currency);
  }
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  onClose(){
    this.close.emit();
  }
}