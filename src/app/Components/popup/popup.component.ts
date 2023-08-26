import { Component, EventEmitter, Output } from '@angular/core';
import { PopupCardComponent } from './popup-card/popup-card/popup-card.component';


export interface favData {
  icon: string;
  cur: string;
} 

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
}

