import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})

export class QuoteDetailsComponent {

  @Input() quote: Quote;
  @Output() deleteQuote = new EventEmitter();

  quoteDel(){
    this.deleteQuote.emit();
  }
  
}