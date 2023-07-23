import {Component, HostListener, Output, EventEmitter} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { LocationsService } from 'src/app/services/locations.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Location } from 'src/app/models/location.model';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
})
export class SearchInputComponent {
  value: string = '';
  isLoading: boolean = false;
  @Output() dataLoaded = new EventEmitter<Location[]>();

  constructor(private locationsService: LocationsService) {}

  toggleIsLoading() {
    this.isLoading = !this.isLoading
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    this.value = (event.target as HTMLInputElement).value;
    if (event.key === 'Enter' && this.value !== '') {
      this.toggleIsLoading();
      this.locationsService.getLocations(this.value)
        .subscribe(locations => {
          this.toggleIsLoading();
          this.dataLoaded.emit(locations.data);
        })
    }
  }
}
