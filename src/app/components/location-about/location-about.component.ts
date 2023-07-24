import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-about',
  templateUrl: './location-about.component.html',
  styleUrls: ['./location-about.component.scss'],
  standalone: true
})
export class LocationAboutComponent {
  @Input() num_reviews: string = '';
  @Input() rating: string = '';
  @Input() rating_image_url: string = '';
  @Input() description: string = '';
}
