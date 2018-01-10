import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirst',
})
export class MyFirstPipe implements PipeTransform {

  transform(value: any, strToAppend: any) {
    return String(value).toUpperCase() + String(strToAppend);
  }

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  person = {
    firstName: 'George',
    lastName: 'Carlin',
  };
  colors = [ 'blue', 'red', 'green' ];
  currencyType = 'INR';
  amt = 1200000;
}
