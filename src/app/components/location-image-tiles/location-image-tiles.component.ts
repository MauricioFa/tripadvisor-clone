import { Component, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Photo } from 'src/app/models/location-details.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-location-image-tiles',
  templateUrl: './location-image-tiles.component.html',
  styleUrls: ['./location-image-tiles.component.scss'],
  standalone: true,
  imports: [MatGridListModule, NgIf],
})
export class LocationImageTilesComponent {
  @Input() photos: Photo[] = [];
}
