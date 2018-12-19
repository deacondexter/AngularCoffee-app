import { Component, OnInit } from '@angular/core';
import { CoffeeDataService } from '../coffee-data.service';
import { Coffee } from 'coffeeModel';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  // coffee;
  coffee: Coffee[];

  constructor(private coffeeData: CoffeeDataService) {
    this.coffeeData.getCoffee().subscribe(c => (this.coffee = c));  //this was moved here from the ngOnInit during troubleshooting of the console.log result of undefined....
  }
  // THE SUBSCRIBE METHOD TIES TO COFFEEDATASERVICE----
  // THE ACTUAL SUBSCRIBE METHOD TRIGGERS THAT AND SAYS OKAY, DO YOUR WORK, AND GIVE ME BACK A RESULT.....(which is the first c)  ....AND GIVE ME A COPY OF THE RESULTS...this way the component can read through the list and display it on the page.

  ngOnInit() {
    // this.coffeeData.getCoffee().subscribe(c => (this.coffee = c));
    // console.log(this.coffee);
  }
}
  // here in the ngOnInit(), we're using the private coffeeData variable from this constructor, calling the getCoffee() method from the service,.....subscribing to it, it gives me a function, and we call and object called "c" and the response is going to be my array.  we'll call it "c" short for coffee.
  // broken down::::
      //  subscribe to the getCoffee() method, as soon as its done it give me back data   (...which is "c =>"), then we take that data (...which is "c" on the side of the this.coffee equation) and jam it into local property (...which is this.coffee).
// please help me understand this!?!??!
// next, we log it out to see it working in the console....log never worked though...just said undefined...????