import { Component, OnInit } from '@angular/core';
import { CoffeeDataService } from '../coffee-data.service';
import { Coffee } from 'coffeeModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  myCoffee: Coffee;
  // myCoffee is the variable.  Coffee is the local property
  id: number;

  constructor(
    private coffeeData: CoffeeDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.coffeeData
        .getCoffeeById(this.id)
        .subscribe(c => (this.myCoffee = c));
    });
  }
  // we had to make this subscription inside the ngOnInit() in order to get the info out of the ActivatedRoute from the CoffeeDetailComponent constructor....
  // this.route is referring to the private route from the constructor above!
  // we are subscribing to the parameters of the address (aka URL)....pretty much saying, there's a 1 up there, let me know when that shows up
  // it's going to give me parameters.  
  // then we want to run a function.  "parameters, run this code!"
  // we're also going to be storing an id, which is a number.  .....add this to the class now!
  // we're subscribing to the parameters on my route(first params...), and it's giving me that back as an array(the second params)
  // the + (plus sign) is a short cut to turn it into a number.  this makes sure we get a number out of there, and not a string, because my id is a number, and the id property on my coffee is also a number.
  // this.coffeeData.getCoffeeById(this.id).subscribe(c => (this.myCoffee = c)); ----  this is sort of a chain of subscriptions now...
  // pretty much, this is saying, there's going to be an id in the url, as soon as it shows up, give me a copy of it, and then send that down to my service to get me an item back.  as end result, should have number in my id field, and should have item that's fetched in the database in my myCoffee property

}

// why am i getting errors?  it works.... but...
// CoffeeDetailComponent.html:5 ERROR TypeError: Cannot read property 'name' of undefined
//     at Object.eval [as updateRenderer] (CoffeeDetailComponent.html:6)
//     at Object.debugUpdateRenderer [as updateRenderer] (core.js:22503)
//     at checkAndUpdateView (core.js:21878)
//     at callViewAction (core.js:22114)
//     at execComponentViewsAction (core.js:22056)
//     at checkAndUpdateView (core.js:21879)
//     at callViewAction (core.js:22114)
//     at execEmbeddedViewsAction (core.js:22077)
//     at checkAndUpdateView (core.js:21874)
//     at callViewAction (core.js:22114)
