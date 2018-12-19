import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';  // ability to wait a second or two for the data
import { Coffee } from 'coffeeModel';
// how is the observable working here...?   this. ?  

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {  //THIS SERVICE IS USED IN THE OBSERVABLE CHAIN TO GIVE ME BACK A PROMISE FROM THE GETCOFFEE() FUNCTION. IT'S PRETTY MUCH SAYING THIS WILL TRIGGER SOMETIME IN THE FUTURE (now go to the coffee-list.component.ts to see the rest of the notes in caps locks....)

  // coffeeUrl : "http://localhost:3000/coffee/"; // ERROR-----this is what gives/gave the console.log result of undefined.....we were accidentally declaring it as a type instead of using the equals sign...
  // coffeeUrl: string = "http://localhost:3000/coffee/";
  coffeeUrl = "http://localhost:3000/coffee/"; // this is the same as above.


  getCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.coffeeUrl);   // THIS IS THE PROMISE....as mentioned above in caps locks
  }
  // this is grabbing the http from the constructor below, and 
  // this should give me back a list of my coffee items as a GET request against the "http://localhost:3000/coffee/" address
  // I need help to understand this better....I think.  

  getCoffeeById = (id: number): Observable<Coffee> => {
    return this.http.get<Coffee>(this.coffeeUrl + "/" + id);
  };
  // if i go to the coffeeUrl, I'll see the full json server database
  // if i go to "http://localhost:3000/coffee/1" or /2, etc, I'll get just that sepcific one by it's id

  constructor(private http: HttpClient) { }
}
