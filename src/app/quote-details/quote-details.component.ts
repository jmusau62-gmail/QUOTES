
import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Quote} from './quotes';
import { Time } from './time-count.pipe.spec';

@Component({
  selector: 'app-root',
@export class AppComponent {
  title = 'Quotes';
  quote = 'submit';
 m = 'quotes';

 quotes = [
  new Quote(1, 'godbye', new Time(12, 25)),
  new Quote(2, 'goodmorning', new Time(09, 15)),
  new Quote(3, 'goodevening', new Time(10, 20)),
 ] ;
}