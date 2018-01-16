import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { Router } from '@angular/router';

import { CreditCardValidator } from 'angular-cc-library';

import { ProfileService } from '../profile.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: any;
  showCard = false;
  newCard: FormGroup;
  submitted = false;
  is_efault = false;

  addCardShow() {
    this.showCard = !this.showCard;
  }

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.newCard = new FormGroup({
      'card': new FormControl('', <any>CreditCardValidator.validateCCNumber),
      'CVV': new FormControl('', Validators.required),
      'YYYY': new FormControl('', Validators.required),
      'MM': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'is_default': new FormControl(false)
    });
  }

  isDefault() {
    this.is_efault = !this.is_efault;
  }

  deleteCard(cardId) {
    this.profileService.deleteCard(cardId)
      .subscribe(x => {
        this.snackBar.open('Карта удалена', '', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          extraClasses: [ 'warning-bar' ],
          duration: 3000,
        });
        this.profileService.getCards()
          .subscribe(cards => {
            this.cards = cards.cards;
          });
      });
  }

  onSubmit() {
    this.newCard.patchValue({
      is_default: this.is_efault
    });
    this.submitted = true;
    if (this.newCard.valid) {
      this.profileService.addCard(this.newCard.value)
        .subscribe(
          card => {
            this.snackBar.open('Проверьте правильность данных', '', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
              extraClasses: [ 'success-bar' ],
              duration: 3000,
            });
            this.newCard.reset();
            this.showCard = false;
            this.profileService.getCards()
              .subscribe(cards => {
                this.cards = cards.cards;
              });
          }, err => {
            this.snackBar.open('Проверьте правильность данных', '', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
              extraClasses: [ 'warning-bar' ],
              duration: 3000,
            });
          });
    } else {
      this.snackBar.open('Проверьте правильность данных', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    }
  }

  ngOnInit() {
    this.profileService.getCards()
      .subscribe(cards => {
        this.cards = cards.cards;
      });
    this.profileService.notifyOther({option: 'cards', value: 'Кредитные карты'});
  }

}
