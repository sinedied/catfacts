import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fact$: Observable<string>;

  constructor(http: HttpClient) {
    this.fact$ = http.get(
      `${environment.apiUrl}/facts/random`,
      { responseType: 'text' }
    );
  }
}
