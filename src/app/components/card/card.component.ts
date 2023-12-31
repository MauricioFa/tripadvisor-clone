import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { Location } from 'src/app/models/location.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, RouterModule],
})
export class CardComponent {
  @Input() someArray: Location = {
    location_id: '',
    name: '',
    address_obj: {},
  };
}
