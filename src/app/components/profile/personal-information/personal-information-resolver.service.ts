import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { ProfileService } from '../profile.service';

@Injectable()
export class PersonalInformationResolverService implements Resolve<any> {
  constructor(private profileService: ProfileService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.profileService.getPersonalInfo();
  }
}
