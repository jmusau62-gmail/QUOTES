import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 quotes: Quote[] = [
  new Quote(1, 'godbye',"Martin Luther", new Date(2018,9,11)),
  new Quote(2, 'goodmorning',"P Diddy", new Date(2009,3,14)),
  new Quote(3, 'goodevening',"jay Z", new Date(2019,8,20)),
 ] ;

 toggleDetails(index: number){
   this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }

}
