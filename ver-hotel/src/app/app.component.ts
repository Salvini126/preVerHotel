import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ver-hotel';
  
  constructor(private http : HttpClient){

  }
  ngOnInit(): void {
    this.http.get('https://my-json-server.typicode.com/malizia-g/hotel/songlist')
  }
}
