import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickTimeStampLog = [];
  isDisplayed = false;

  toggleDisplay() {
    const timeStamp = new Date().toLocaleTimeString();

    this.clickTimeStampLog.push(timeStamp);

    this.isDisplayed = !this.isDisplayed;
  }

  getBackground(i : number) {
    if(i >= 4) {
      return 'blue';
    }
    else {
      return '';
    }
  }
}
