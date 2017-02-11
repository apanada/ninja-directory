import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";
import { AngularFire, FirebaseListObservable } from "angularfire2";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css', '../../../public/bootstrap.min.css']
})

export class HomeComponent implements OnInit {
  homeTitle: string = "Welcome to Home!";
  ninjas: FirebaseListObservable<any[]>;

  constructor(private logger: LoggingService,private angularFireService: AngularFire) {
    this.ninjas = this.angularFireService.database.list('/');
   }

  logIt(): any{
    this.logger.log();
  }

  ngOnInit() {
  }
}
