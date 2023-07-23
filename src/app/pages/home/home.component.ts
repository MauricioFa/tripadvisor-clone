import { Component } from '@angular/core';
import { SearchInputComponent } from 'src/app/components/search-input/search-input.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CommonModule } from "@angular/common";
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SearchInputComponent, CardComponent, CommonModule]
})
export class HomeComponent {
  dataReceived: Location[] = [];
  onDataLoaded (data: Location[]) {
    this.dataReceived = data;
  }
}
