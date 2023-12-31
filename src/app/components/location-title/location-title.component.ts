import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-location-title',
  templateUrl: './location-title.component.html',
  styleUrls: ['./location-title.component.scss'],
  standalone: true,
  imports: [MatIconModule, NgIf],
})
export class LocationTitleComponent {
  @Input() name: string = '';
  @Input() src: string = '';
  @Input() rating: string = '';
  @Input() ranking: string = '';
  @Input() address: string = '';
}
