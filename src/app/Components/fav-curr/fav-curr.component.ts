import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/interfaces/currency.model';

@Component({
  selector: 'app-fav-curr',
  templateUrl: './fav-curr.component.html',
  styleUrls: ['./fav-curr.component.scss'],
})
export class FavCurrComponent implements OnInit{
  @Output() onSelect = new EventEmitter<ICurrency>();
  @Input() currencies: ICurrency[] = [];
  isShown!: boolean;
  // constructor(private dialogRef : MatDialog){}
  // onDialog() : void {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.position = { top: '3rem', right: '3rem' };
  //   dialogConfig.width= '400px'
  //   dialogConfig.height= '600px'
  //   const dialogRef = this.dialogRef.open(PopupComponent, dialogConfig);
  // }

  ngOnInit(): void {
    console.log(this.currencies);
  }

  getSelectedCurrency(currency: ICurrency) {
    this.onSelect.emit(currency);
  }
}
