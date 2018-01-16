import { Component, OnInit } from '@angular/core';
import { TrackingService } from './tracking.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  trackingData: any;

  constructor(private trackingService: TrackingService) { }

  ngOnInit() {
  }

  onTrack(track: string) {
    this.trackingService.getTracking(track)
      .subscribe(x => {
        this.trackingData = x;
      });
  }

}
