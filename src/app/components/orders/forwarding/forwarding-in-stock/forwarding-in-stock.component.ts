import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ForwardingService } from './../forwarding.service';

@Component({
  selector: 'app-forwarding-in-stock',
  templateUrl: './forwarding-in-stock.component.html',
  styleUrls: [ './forwarding-in-stock.component.scss' ]
})
export class ForwardingInStockComponent implements OnInit {
  subscriptions: Subscription[] = [];
  public parcels: any;
  image: any[] = [];
  component = 'forwarding-in-stock';
  sum = 10;

  public loading = false;

  constructor(private forwardingService: ForwardingService) {
    this.forwardingService.component$
    .subscribe(value => {
      if (value === 'forwarding-in-stock') {
        // this.sum += 10;
        // this.forwardingService.loadMoreStorageOrder(this.sum)
        //   .subscribe(parcels => this.parcels.push(parcels));
      }
    });
  }

  selectParcel() {
    this.image = [];
    this.image.push({source: '../../../../../assets/images/orders/mail.png', thumbnail: '../../../../../assets/images/orders/mail.png'});
  }

  ngOnInit() {
    this.loading = true;
    this.forwardingService.getStorageOrder()
      .subscribe(x => {
        this.loading = false;
        this.parcels = x;
      });
  }

}
