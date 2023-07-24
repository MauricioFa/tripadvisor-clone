import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  
  constructor(private http: HttpClient) {}
  
  getLocations(search: string){
    let apiUrl = encodeURI(`${environment.API_URL}/api/search?searchQuery=${search}`)
    return this.http.get<any>(apiUrl)
  }

  getLocation(locationId: string) {
    let apiUrl = encodeURI(`${environment.API_URL}/api/${locationId}/details`)
    return this.http.get<any>(apiUrl)
  }

  getPhotos(locationId: string) {
    let apiUrl = encodeURI(`${environment.API_URL}/api/${locationId}/photos`)
    return this.http.get<any>(apiUrl)
  }
}
