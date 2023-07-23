import { Component } from '@angular/core';
import { LocationTitleComponent } from 'src/app/components/location-title/location-title.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true,
  imports: [LocationTitleComponent],
})
export class LocationComponent {

}
