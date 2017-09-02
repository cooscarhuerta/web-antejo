import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-history-credit',

  templateUrl: './history-credit.component.html',
  styleUrls: ['./history-credit.component.scss']
})
export class HistoryCreditComponent implements OnInit {
  body = {
    email : 'nan@dummy.com',
    password : 'prueba123'
  };
  results = null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:
  }
  public logIn(): void{
      this.http.post('http://localhost/bantejo/public/AdminAuth/LogIn',this.body,
    {
      headers: new HttpHeaders().set('Content-type', 'application/json')
    }).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['response'];
      console.log(data);
      console.log(this.results);
    });
  }

}
