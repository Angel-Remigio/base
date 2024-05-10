import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/CounterComponent';


@NgModule ({
  declarations: [
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})


export class CounterModule{}
