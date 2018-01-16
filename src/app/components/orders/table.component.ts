import { OpenImageComponent } from './open-image/open-image.component';
import {
  Component,
  Input, OnInit
} from '@angular/core';

import { MatDialog, MatDialogRef, MatSnackBar, Sort } from '@angular/material';

import { ForwardingService } from './forwarding/forwarding.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ]
})
export class TableComponent implements OnInit {
  @Input() item: any;
  @Input() items: any;
  @Input() number_id = false;
  @Input() tracking = false;
  @Input() itemImage = false;
  @Input() weight = false;
  @Input() message = false;
  @Input() payment = false;
  @Input() sortedData: any;
  @Input() component: any;
  contentsOfParcel: any[] = [];
  public parcels: any[] = [];
  disableBtnAdd = false;
  checkAll = false;
  loading = false;

  constructor(private forwardingService: ForwardingService,
              private mdDialog: MatDialog) {
  }

  trackById(index, item) {
    return item.id;
  }

  openImage(url) {
    const dialogRef: MatDialogRef<OpenImageComponent> = this.mdDialog.open(
      OpenImageComponent,
      {
        width: '40vw',
        height: '60vh',
      });

    dialogRef.afterClosed()
      .subscribe(result => {

      });
  }

  ngOnInit() {
    if (this.component === 'forwarding-in-stock') {
      this.message = true;
      this.itemImage = true;
      this.tracking = true;
    }
    if (this.component === 'forwarding-packed') {
      this.message = true;
      this.tracking = true;
    }
    if (this.component === 'order-expect-payment') {
      this.weight = true;
      this.number_id = true;
      this.payment = true;
    }
    if (this.component === 'order-sended') {
      this.weight = true;
      this.number_id = true;
      this.payment = true;
    }
    if (this.component === 'order-expect-receipt') {
      this.weight = true;
      this.number_id = true;
      this.payment = true;
    }
    if (this.component === 'order-in-stock') {
      this.weight = true;
      this.number_id = true;
      this.payment = true;
    }
    this.sortedData = this.item;
  }

  onScroll() {
    // this.loading = true;
    this.forwardingService.loadData(this.component);
  }

  addParcel(data) {
    this.contentsOfParcel.push(data);
    const index = this.parcels.indexOf(data);
    this.parcels.splice(index, 1);
  }

  onSendAdd(ind, data) {
    data.completed = !data.completed;
    const t = this.parcels.filter((item) => item.completed === true);
    if (t.length > 0) {
      this.disableBtnAdd = true;
    } else {
      this.disableBtnAdd = false;
    }
  }

  sortData(sort: Sort) {
    const data = this.item.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'tracking_number':
          return compare(a.tracking_number, b.tracking_number, isAsc);
        case 'shop_title':
          return compare(a.shop_title, b.shop_title, isAsc);
        case 'payment':
          return compare(+a.need_payment, +b.need_payment, isAsc);
        case 'price':
          return compare(+a.value, +b.value, isAsc);
        case 'number_id':
          return compare(+a.value, +b.value, isAsc);
        case 'weight':
          return compare(+a.weight_oz, +b.weight_oz, isAsc);
        case 'date':
          return compare(+a.created, +b.created, isAsc);
        default:
          return 0;
      }
    });
    this.item = this.sortedData;
    this.items = this.sortedData;
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
