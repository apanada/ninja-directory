import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LoggingService } from "../logging.service";
import { DataService } from "../data.service";
declare let firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css', '../../../public/bootstrap.min.css']
})

export class DirectoryComponent implements OnInit {
  directoryTitle: string = "Welcome to Directory!";
  ninja: string;
  classes: any = { 'label': true, 'label-success': true };
  showText: boolean = true;
  ninjas: any = [];

  constructor(private activatedRoute: ActivatedRoute, private logger: LoggingService, private dataService: DataService) {
    this.ninja = activatedRoute.snapshot.params['ninja'];
  }

  logIt(): any {
    this.logger.log();
  }

  ngOnInit() {
    //this.dataService.fetchData().subscribe(data => this.ninjas = data);
    this.fbGetData();
  }

  fbGetData(): void {
    firebase.database().ref('/').on('child_added', snapshot => this.ninjas.push(snapshot.val()));
  }

  fbPostData(name: string, belt: string): void {
    firebase.database().ref('/').push({name: name, belt: belt});
  }
}
