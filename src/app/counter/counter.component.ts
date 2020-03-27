import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from './reducer/counter.state';
import { increment, decrement, reset } from './reducer/counter.actions';
import { selectCounter } from './reducer/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number>

  constructor(private store: Store<CounterState>) {
    this.counter$ = this.store.select(selectCounter)
  }

  ngOnInit() {
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

}
