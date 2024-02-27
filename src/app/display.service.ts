import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http:HttpClient) { }

  getImgs(){
    return this.http.get("http://localhost:3000/Cards");
  }
}
