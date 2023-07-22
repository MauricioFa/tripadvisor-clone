import { Component } from '@angular/core';
import { SearchInputComponent } from 'src/app/components/search-input/search-input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SearchInputComponent]
})
export class HomeComponent {

}
