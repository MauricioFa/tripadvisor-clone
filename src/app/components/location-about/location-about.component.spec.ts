import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAboutComponent } from './location-about.component';

describe('LocationAboutComponent', () => {
  let component: LocationAboutComponent;
  let fixture: ComponentFixture<LocationAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationAboutComponent]
    });
    fixture = TestBed.createComponent(LocationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
