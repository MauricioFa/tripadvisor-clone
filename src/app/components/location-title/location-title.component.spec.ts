import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTitleComponent } from './location-title.component';

describe('LocationTitleComponent', () => {
  let component: LocationTitleComponent;
  let fixture: ComponentFixture<LocationTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationTitleComponent]
    });
    fixture = TestBed.createComponent(LocationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
