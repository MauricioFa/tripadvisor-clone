import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  
  constructor(private http: HttpClient) {}
  
  getLocations(search: string){
    let apiUrl = encodeURI(`${environment.API_URL}/api/search?searchQuery=${search}`)
    console.log({ apiUrl })
    return this.http.get<any>(apiUrl)
  }
}
