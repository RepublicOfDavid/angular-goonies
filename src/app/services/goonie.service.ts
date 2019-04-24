import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Goonie } from '../models/Goonie'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class GoonieService {

  gooniesURL:string = 'https://my-json-server.typicode.com/RepublicOfDavid/goonies-cast-list-db/cast';

  constructor(private http:HttpClient) { }

  // Get Goonies
  getGoonies():Observable<Goonie[]> {
    return this.http.get<Goonie[]>(this.gooniesURL);
  }

  // Delete Goonie
  deleteGoonie(goonie:Goonie):Observable<Goonie> {
    const url = `${this.gooniesURL}/${goonie.id}`;
    return this.http.delete<Goonie>(url, httpOptions);
  }

  // Add Goonie
  addGoonie(goonie:Goonie):Observable<Goonie>{
    return this.http.post<Goonie>(this.gooniesURL, goonie, httpOptions)
  }


}
