import { Component, OnInit, Input } from '@angular/core';
import { TrackingService } from '../tracking.service';

@Component({
  selector: 'app-tracking-list',
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.scss']
})
export class TrackingListComponent implements OnInit {
  @Input() trackingList: any;
  loading = true;
  constructor(private trackingService: TrackingService) {
    this.trackingService.notifyObservable$
      .subscribe(value => {
        this.loading = value;
      });
  }

  ngOnInit() {

  }

}
