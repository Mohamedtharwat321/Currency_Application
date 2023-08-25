import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('crossfadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }), // Initial state
        animate('0.5s ease', style({ opacity: 1 })), // Final state
      ]),
    ]),
  ],
})
export class AppComponent {

  //switch between 2 components
  currentComponent: string = 'componentconvert';


  //toggle between 2 buttons
  buttonConvertActive: boolean = true;
  buttonCompareActive: boolean = false;

  toggleButtons(buttonClicked: string) {
    if (buttonClicked === 'buttonconvert') {
      this.buttonConvertActive = true;
      this.buttonCompareActive = false;
    } else if (buttonClicked === 'buttoncompare') {
      this.buttonConvertActive = false;
      this.buttonCompareActive = true;
    }
  }
  
}
