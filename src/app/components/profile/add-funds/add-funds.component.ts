import { Component, OnInit } from '@angular/core';
import { CreditCardValidator } from 'angular-cc-library';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.scss']
})
export class AddFundsComponent implements OnInit {
  form: FormGroup;
  payPal: number;
  Bitcoin: number;
  cards = [
    'PayPal',
    'Кредитная карта',
    'Bitcoin'
  ];

  constructor(private _fb: FormBuilder,
              private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.notifyOther({option: 'addfunds', value: 'пополнить баланс'});
    this.form = this._fb.group({
      suma: ['', Validators.required],
      nameCard: ['', Validators.required],
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]]
    });
  }

  sendPayPal() {
    console.log(this.payPal);
  }

  sendCreditCard() {
    console.log(this.form.value);
  }

  sendBitcoin() {
    console.log(this.Bitcoin);
  }

}
