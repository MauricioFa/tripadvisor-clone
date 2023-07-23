import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  
  constructor(private http: HttpClient) {}
  
  getLocations(search: string){
    let apiUrl = encodeURI(`https://proxy-server-production-afb3.up.railway.app/api/search?searchQuery=${search}`)
    return this.http.get(apiUrl, {responseType: 'text'})
  }
}
