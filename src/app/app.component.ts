import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Docgia } from './Docgia/docgia';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web';
  private apiUrl = 'https://localhost:44327/api/Docgias/Get';
  docgias : any;
  constructor(private http: Http){
    this.getContent();
  }

  getData():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getContent(){
    this.getData().subscribe(x =>{
      console.log(x);
      this.docgias = x;
    })
  }
}
