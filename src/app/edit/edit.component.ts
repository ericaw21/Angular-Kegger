import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import { BeerService } from '../beer.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // providers: [BeerService]
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, brewery: string, location: string, ibu: number, alcoholContent: number, halfPintPrice: number, pintPrice: number, description: string) {
    var newBeer: Beer = new Beer(name, brewery, location, ibu, alcoholContent, halfPintPrice, pintPrice, description);
    console.log(newBeer);
  }

}