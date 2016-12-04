import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterArrayPipe } from './filter.pipe';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  private showHeading;
  private name;
  private colors;
  private name_2;
  private birthday;
  private price;
  private todos = [{
    text: 'Wash dishes'
  }, {
    text: 'Take out trash'
  }];

  constructor() {
    this.showHeading = true;
    this.name = "John";
    this.colors = ['Red', 'Blue', 'Green'];
    this.name_2 = "Michael Jordan";
    this.birthday = new Date(1960, 10, 29);
    this.price = 500;
  }
}
