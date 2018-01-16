import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { ProfileService } from '../profile.service';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  invoice_autopay: boolean;
  subscribe_news: boolean;
  system_notifications: boolean;
  report_day: boolean;
  setting: any;
  loading = true;
  loadingSetting = false;

  constructor(
    private translate: TranslateService,
    private profileService: ProfileService,
    private langService: LangService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  settingForm: FormGroup = this.fb.group(
    {
      nickname: [ '' ],
      invoice_autopay: [ '' ],
      units_weight: [ '' ],
      language: [ '' ],
      subscribe_news: [ '' ],
      system_notifications: [ '' ],
      report_day: [ '' ],
      special_offers: [''],
      best_of_week: [''],
      usa_discounts: [''],
      wholesale_invitations: ['']
    });

  ngOnInit() {
    this.loadingSetting = true;
    this.profileService.notifyOther({option: 'settings', value: 'Настройки'});
    this.profileService.getSettings()
      .subscribe(setting => {
        this.setting = setting.settings;
        for (let key in this.setting) {
          if (this.setting[key] === 1) {
            this.setting[key] = true;
          } else {
            if (this.setting[key] === 0) {
              this.setting[key] = false;
            }
          }
        }
        this.loadingSetting = false;
        this.loading = false;
        this.settingForm.patchValue({
          ...setting.settings
        });
      });
  }

  changeSpecialOffers() {
    this.setting.special_offers = !this.setting.special_offers;
    this.settingForm.patchValue({
      special_offers: this.setting.special_offers
    });
  }

  changeBestOfWeek() {
    this.setting.best_of_week = !this.setting.best_of_week;
    this.settingForm.patchValue({
      best_of_week: this.setting.best_of_week
    });
  }

  changeUsaDiscount() {
    this.setting.usa_discounts = !this.setting.usa_discounts;
    this.settingForm.patchValue({
      usa_discounts: this.setting.usa_discounts
    });
  }

  changeWholeSale() {
    this.setting.wholesale_invitations = !this.setting.wholesale_invitations;
    this.settingForm.patchValue({
      wholesale_invitations: this.setting.wholesale_invitations
    });
  }

  changeAutopay() {
    this.setting.invoice_autopay = !this.setting.invoice_autopay;
    this.settingForm.patchValue({
      invoice_autopay: this.setting.invoice_autopay
    });
  }

  changeSubscribeNews() {
    this.setting.subscribe_news = !this.setting.subscribe_news;
    this.settingForm.patchValue({
      subscribe_news: this.setting.subscribe_news
    });
  }

  changeNotification() {
    this.setting.system_notifications = !this.setting.system_notifications;
    this.settingForm.patchValue({
      system_notifications: this.setting.system_notifications
    });
  }

  changeReport() {
    this.setting.report_day = !this.setting.report_day;
    this.settingForm.patchValue({
      report_day: this.setting.report_day
    });
  }

  changeLanguage(lang) {
    this.translate.use(lang);
    this.langService.changeLang(lang);
    this.settingForm.patchValue({
      language: lang
    });
  }

  changeWeight(weight) {
    this.settingForm.patchValue({
      units_weight: weight
    });
  }

  saveSettings() {
    this.loadingSetting = true;
    this.profileService.changeLang(this.settingForm.value.language)
      .subscribe(x => console.log(x));
    this.profileService.saveSettings(this.settingForm.value)
      .subscribe(setting => {
        this.loadingSetting = false;
        this.snackBar.open('Информация успешно обновлена', '', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          extraClasses: [ 'success-bar' ],
          duration: 3000,
        });
      }, err => {
        this.loadingSetting = false;
      });
  }

}
