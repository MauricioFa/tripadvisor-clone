import { Component, OnInit } from '@angular/core';
import { LocationTitleComponent } from 'src/app/components/location-title/location-title.component';
import { ActivatedRoute } from '@angular/router';
import { LocationDetails, Photo } from 'src/app/models/location-details.model';
import { CommonModule } from "@angular/common";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LocationImageTilesComponent } from 'src/app/components/location-image-tiles/location-image-tiles.component';
import { LocationAboutComponent } from 'src/app/components/location-about/location-about.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LocationAboutComponent,
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
      large: {
        url: ''
      },
    }
  }]

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(response => {
      this.dataReceived = response['locationData'][0];
      this.photosReceived = response['locationData'][1]?.data || [];
      this.isDataLoaded = true;
    });
  }
}
