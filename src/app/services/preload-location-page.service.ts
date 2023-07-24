import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { LocationsService } from './locations.service';
import { inject } from '@angular/core';
import { zip } from 'rxjs';

export const LocationsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
) => {
  const locationId = route.paramMap.get('id');
  return zip(
    inject(LocationsService).getLocation(locationId!),
    inject(LocationsService).getPhotos(locationId!)
)
};