import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoicePaid: any[];
  invoiceUnpaid: any[];
  invoiceCancel: any[];
  loading = false;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.profileService.notifyOther({option: 'invoice', value: 'Счет'});
    this.profileService.getUnpaidInvoice()
      .subscribe(unpaid => {
        this.invoiceUnpaid = unpaid.invoices;
        this.loading = false;
      });
    this.profileService.getPaidInvoice()
      .subscribe(paid => this.invoicePaid = paid.invoices);
    this.profileService.getCanceledInvoice()
      .subscribe(canceled => this.invoiceCancel = canceled.invoices);
  }

}
