import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(): any {
    return this.http.get('https://nn-angular-9d12f.firebaseio.com/.json').map(response => response.json());
  }
}
