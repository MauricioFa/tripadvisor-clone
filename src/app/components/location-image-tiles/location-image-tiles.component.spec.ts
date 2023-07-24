import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationImageTilesComponent } from './location-image-tiles.component';

describe('LocationImageTilesComponent', () => {
  let component: LocationImageTilesComponent;
  let fixture: ComponentFixture<LocationImageTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationImageTilesComponent]
    });
    fixture = TestBed.createComponent(LocationImageTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
