import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ForwardingService } from './../forwarding.service';

@Component({
  selector: 'app-forwarding-packed',
  templateUrl: './forwarding-packed.component.html',
  styleUrls: ['./forwarding-packed.component.scss']
})
export class ForwardingExpectReceiptComponent implements OnInit {
  subscriptions: Subscription[] = [];
  public parcels: any;
  component = 'forwarding-packed';

  public loading = false;
  sum = 10;

  constructor(
    private forwardingService: ForwardingService
  ) {
    this.forwardingService.component$
      .subscribe(value => {
        if (value === 'forwarding-packed') {
          // this.sum += 10;
          // this.forwardingService.loadMoreWaitOrder(this.sum)
          //   .subscribe(parcels => this.parcels.push(parcels));
        }
      });
  }

  ngOnInit() {
    this.loading = true;
    this.forwardingService.getWaitOrder()
      .subscribe(x => {
        this.loading = false;
        this.parcels = x;
      });
  }

}
