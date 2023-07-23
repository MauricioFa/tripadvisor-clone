import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-location-title',
  templateUrl: './location-title.component.html',
  styleUrls: ['./location-title.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class LocationTitleComponent {
  @Input() name: string = '';

}
