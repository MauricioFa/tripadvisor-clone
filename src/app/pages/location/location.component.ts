import { Component, OnInit } from '@angular/core';
import { LocationTitleComponent } from 'src/app/components/location-title/location-title.component';
import { LocationsService } from 'src/app/services/locations.service';
import { ActivatedRoute } from '@angular/router';
import { LocationDetails, Photo } from 'src/app/models/location-details.model';
import { CommonModule } from "@angular/common";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LocationImageTilesComponent } from 'src/app/components/location-image-tiles/location-image-tiles.component';
import { zip } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LocationImageTilesComponent,
    LocationTitleComponent,
    MatProgressBarModule,
  ],
})
export class LocationComponent implements OnInit {
  locationId: string | null = null;
  isDataLoaded: boolean = false;
  dataReceived: LocationDetails = {
    address_obj: {},
    amenities: [],
    description: '',
    name: '',
    num_reviews: '',
    rating: '',
    review_rating_count: {},
    rating_image_url: '',
  };
  photosReceived: Photo[] = [{
    images: {
      medium: {
        url: ''
      },
      large: {
        url: ''
      },
    }
  }]

  constructor(
    private locationsService: LocationsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationId = params.get('id');
      if (this.locationId) {
        this.getAllLocationDetails(this.locationId );
      }
    });
  }
  
  getAllLocationDetails(locationId: string){
    zip(
        this.locationsService.getLocation(locationId),
        this.locationsService.getPhotos(locationId)
    )
      .subscribe(response => {
        this.dataReceived = response[0];
        this.photosReceived = response[1]?.data || [];
       this.isDataLoaded = true;
      });
  }
}
