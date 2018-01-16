import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AddParcelService } from '../add-parcel/add-parcel.service';

@Injectable()
export class TableParcelResolverService implements Resolve<any> {
  constructor(private addParcelService: AddParcelService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot) {
    return this.addParcelService.getParcel();
  }
}
