import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  info = [
    {first: 'Sam', last: 'Berenthal', email: 'sam@info.com'},
    {first: 'Willy', last: 'Cook', email: 'willy@info.com',},
    {first: 'Sam', last: 'Berenthal', email: 'sam@info.com'},
    {first: 'Willy', last: 'Cook', email: 'willy@info.com',}
  ]
}
