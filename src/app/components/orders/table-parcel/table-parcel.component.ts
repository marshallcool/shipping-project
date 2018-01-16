import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import { AddParcelService } from './../add-parcel/add-parcel.service';

@Component({
  selector: 'app-table-parcel',
  templateUrl: './table-parcel.component.html',
  styleUrls: ['./table-parcel.component.scss']
})
export class TableParcelComponent implements OnInit {
  public loading = false;
  subscriptions: Subscription[] = [];

  public parcels: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(FormBuilder) fb: FormBuilder,
    private addParcelService: AddParcelService
  ) {
    this.addParcelService.parcel$.subscribe(x => {
      this.parcels = x;
      console.log(x)
      if (x.length === undefined) {
        this.getParcels();
      }
    });
  }

  private getParcels() {
    this.addParcelService.getParcel();
  }


  ngOnInit() {
    this.loading = true;
    this.route.data
      .subscribe(x => {
        this.parcels = x.parcels;
        if (this.parcels.length > 0) {
          this.loading = false;
        }
      });
  }

}
