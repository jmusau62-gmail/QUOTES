import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';
import { time } from 'console';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQoute = new Quote(0,"",""new time());
@Output() addQuote=new EventEmitter<Quote>();

submitGoal(){
  this.addQuote.emit(this.newQoute);
}
  constructor() { }

  ngOnInit() {
  }

}
