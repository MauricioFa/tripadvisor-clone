import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  
  constructor(private http: HttpClient) {}
  
  getLocations(search: string){
    let apiUrl = encodeURI(`/api/search?searchQuery=${search}`)
    return this.http.get<Location[]>(apiUrl)
  }
}
