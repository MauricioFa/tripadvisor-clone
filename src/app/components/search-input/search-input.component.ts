import {Component, HostListener} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class SearchInputComponent {
  value: string = '';
  constructor(private locationsService: LocationsService) {}

  @HostListener('window:keyup', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    this.value = (event.target as HTMLInputElement).value;
    if (event.key === 'Enter' && this.value !== '') {
      this.locationsService.getLocations(this.value)
        .subscribe(locations => {
          console.log(locations)
        })
    }
  }
}
