import { Component, OnInit, Inject, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import {Sort} from '@angular/material';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/startWith';

import { OrderService } from '../../order/order.service';
import { ForwardingService } from '../../forwarding/forwarding.service';

@Component({
  selector: 'app-assemble-parcel',
  templateUrl: './assemble-parcel.html',
  styleUrls: ['./assemble-parcel.scss']
})
export class AssembleParcelComponent implements OnInit, AfterContentInit {
  addresses: Observable<any>;
  delivery: Observable<any>;
  public parcels: any[] = [];
  contentsOfParcel: any[] = [];
  selectDelivery: any;
  public loading = false;
  parcel: any;
  checkAll = false;
  checkAllRemove = false;
  disableBtn = false;
  disableBtnAdd = false;
  sortedData: any;
  showAddAddress = false;
  addAddress: FormGroup;
  parcelForm: FormGroup;
  selectAddress: any;
  deliverys: any;
  country: any;
  countryCtrl: FormControl;
  reactiveCountry: any;
  displayCalculator = false;
  loadingCalculator = false;
  newData: any;
  sum = 0;
  weight = 0;
  price = 0;
  content: any[] = [];

  constructor(
    private orderService: OrderService,
    @Inject(FormBuilder) fb: FormBuilder,
    private forwardingService: ForwardingService,
    private snackBar: MatSnackBar
  ) {
    this.countryCtrl = new FormControl();
    this.reactiveCountry = this.countryCtrl.valueChanges
      .startWith(this.countryCtrl.value)
      .map(title => this.filterCountry(title));
    this.addAddress = new FormGroup({
      'first_name': new FormControl('', Validators.required),
      'last_name': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'zip': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'insurance': new FormControl('')
    });
    this.parcelForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'unsurance_value': new FormControl(''),
      'delivery_type': new FormControl('', Validators.required),
      'address_id': new FormControl('', Validators.required),
      'total_price': new FormControl('', Validators.required),
      'weight': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required),
    });
  }

  shippingOnPacking() {
    this.content = this.contentsOfParcel.map((item) => {
      return {id: item.id};
    });
    this.parcelForm.patchValue({
      delivery_type: this.selectDelivery.provider_name,
      address_id: this.selectAddress.id,
      total_price: this.price,
      weight: this.weight,
      content: this.content
    });
    if (this.parcelForm.valid) {
      this.orderService.createParcel(this.parcelForm.value)
        .subscribe(parcel => {
          console.log(parcel);
        });
    } else {
      this.snackBar.open('Заполните необходимые поля', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    }
  }

  onSendAll() {}

  ngAfterContentInit() {
    $('.material-input').on('focus', '.input-control', function (e) {
      const parent = $(this).parent('.material-input');
      parent.addClass('hovered');
    });
    $('.material-input__error').on('focus', '.input-control', function (e) {
      const parent = $(this).parent('.material-input__error');
      parent.addClass('hovered-error');
    });

    $('.material-input__error').on('blur', '.input-control', function (e) {
      if ($(this).val() === '') {
        $(this).parent('.material-input__error').removeClass('hovered-error');
      }
    });

    $('.material-input').on('blur', '.input-control', function (e) {
      if ($(this).val() === '') {
        $(this).parent('.material-input').removeClass('hovered');
      }
    });
  }

  // Add Parcel
  addParcel(data) {
    this.contentsOfParcel.push(data);
    const index = this.parcels.indexOf(data);
    this.parcels.splice(index, 1);
    if (this.contentsOfParcel.length > 0) {
      this.weight = 0;
      this.price = 0;
      this.weight = this.contentsOfParcel.reduce((prev, next) => {
        return prev + (next.weight || next.weight_oz);
      }, 0);
      this.price = this.contentsOfParcel.reduce((prev, next) => {
        return prev + (next.value || next.total_price);
      }, 0);
    }
  }

  onSendAllAdd() {
    this.checkAll = !this.checkAll;
  }

  addAllParcel() {
    this.parcels = this.parcels.filter(x => {
      if (x.completed) {
        const tempParcel = JSON.parse(JSON.stringify(x));
        tempParcel.completed = false;
        this.contentsOfParcel.push(tempParcel);
      }
      return !x.completed;
    });
    const t = this.parcels.filter((item) => item.completed === true);
    if (t.length > 0) {
      this.disableBtnAdd = true;
    } else {
      this.disableBtnAdd = false;
    }
    if (this.contentsOfParcel.length > 0) {
      this.weight = 0;
      this.price = 0;
      this.weight = this.contentsOfParcel.reduce((prev, next) => {
        return prev + (next.weight || next.weight_oz);
      }, 0);
      this.price = this.contentsOfParcel.reduce((prev, next) => {
        return prev + (next.value || next.total_price);
      }, 0);
    }
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

  // Remove Parcel

  onSendAllRemove() {
    this.checkAllRemove = !this.checkAllRemove;
  }

  removeParcel(data) {
    this.parcels.push(data);
    const index = this.contentsOfParcel.indexOf(data);
    this.contentsOfParcel.splice(index, 1);
    if (this.contentsOfParcel.length > 0) {
      this.weight = 0;
      this.price = 0;
      this.weight = this.contentsOfParcel.reduce((prev, next) => {
        return prev + (next.weight || next.weight_oz);
      }, 0);
      this.price = this.contentsOfParcel.reduce((prev, next) => {
        return prev + (next.value || next.total_price);
      }, 0);
    }
  }

  removeAllParcel() {
    this.contentsOfParcel = this.contentsOfParcel.filter((item) => {
      if (item.completed) {
        const tempParcel = JSON.parse(JSON.stringify(item));
        tempParcel.completed = false;
        this.parcels.push(item);
      }
      return !item.completed;
    });
    const t = this.contentsOfParcel.filter((item) => item.completed === true);
    if (t.length > 0) {
      this.disableBtn = true;
    } else {
      this.disableBtn = false;
    }
    if (this.contentsOfParcel.length > 0) {
      this.weight = 0;
      this.price = 0;
      this.weight = this.contentsOfParcel.reduce((prev, next) => {
        return prev + (next.weight || next.weight_oz);
      }, 0);
      this.price = this.contentsOfParcel.reduce((prev, next) => {
        return prev + (next.value || next.total_price);
      }, 0);
    }
  }

  onSendRemove(ind, data) {
    data.completed = !data.completed;
    const t = this.contentsOfParcel.filter((item) => item.completed === true);
    if (t.length > 0) {
      this.disableBtn = true;
    } else {
      this.disableBtn = false;
    }
  }

  ngOnInit() {
    this.country = this.orderService.changeAddress();
    this.addresses = this.orderService.getAddress();
    this.orderService.getInStockMagazines()
      .subscribe(magazine => console.log(magazine));
    this.loading = true;
    this.orderService.getInStock()
      .subscribe(order => {
        this.forwardingService.getStorageOrder()
          .subscribe(forward => {
            this.parcels = [...order.orders, ...forward];
            this.loading = false;
          });
      });
    this.parcels.forEach(item => {
      item.completed = false;
    });
    this.sortedData = this.parcels;
  }

  sendAddress() {
    if (this.countryCtrl.value) {
      this.addAddress.patchValue({
        country: this.countryCtrl.value
      });
      const countryCode = this.country.filter((item) => item.title === this.addAddress.value.country);
      this.addAddress.patchValue({
        country: countryCode[ 0 ].code
      });
      console.log(this.addAddress)
      if (this.addAddress.valid) {
        this.orderService.addAdress(this.addAddress.value)
          .subscribe(address => {
            console.log(address);
            this.country = this.orderService.changeAddress();
            this.snackBar.open('Адресс успешно добавлен', '', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
              extraClasses: [ 'success-bar' ],
              duration: 3000,
            });
            this.showAddAddress = false;
          });
      }
    } else {
      this.snackBar.open('Не все поля заполненны', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    }
  }

  onChange(deviceValue) {
    if (deviceValue) {
      this.displayCalculator = true;
      const data = {
        country: deviceValue.value.country,
        insurance: '',
        weight: this.weight
      };
      this.loadingCalculator = true;
      this.orderService.sendCalculate(data)
        .subscribe(item => {
          this.deliverys = (item as any).available_services;
          this.deliverys = this.deliverys.filter((delivery) => delivery.price !== false && delivery.price !== null);
          this.loadingCalculator = false;
          // console.log(this.deliverys.length)
        });
    }
  }

  filterCountry(val: string) {
    return val ? this._filter(this.country, val) : this.country;
  }

  private _filter(country: any, val: string) {
    const filterValue = val.toLowerCase();
    return country.filter(count => count.title.toLowerCase().startsWith(filterValue));
  }

  sortData(sort: Sort) {
    const data = this.parcels.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'object': return compare(a.name, b.name, isAsc);
        case 'name': return compare(a.track, b.track, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);
        case 'weight': return compare(+a.price, +b.price, isAsc);
        case 'data': return compare(a.track, b.track, isAsc);
        case 'pay': return compare(a.track, b.track, isAsc);
        default: return 0;
      }
    });
    this.parcels = this.sortedData;
  }

}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
