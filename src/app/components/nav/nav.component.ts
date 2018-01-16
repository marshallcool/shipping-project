import { Component, OnInit, AfterContentInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../services/auth.service';
import { LangService } from '../../services/lang.service';
import { NavService } from './nav.service';
import { GetPersonalAddressDialogComponent } from '../orders/get-personal-adress/get-personal-address-dialog/get-personal-address-dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.scss' ]
})
export class NavComponent implements OnInit, AfterContentInit {
  user: any = [];
  subscriptions: Subscription[] = [];
  icon: any;

  constructor(private translate: TranslateService,
              private authService: AuthService,
              private langService: LangService,
              private navService: NavService,
              private matDialog: MatDialog) {
    this.navService.getUnreadMessages();
    translate.addLangs([ 'ru', 'en' ]);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/ru|en/) ? browserLang : 'ru');

    this.langService.langObservable$
      .subscribe(() => {
        const lang = localStorage.getItem('lang');
        translate.setDefaultLang(lang);
        translate.use(lang);
      });

    this.authService.AuthSubject
      .subscribe(() => {
        this.user = localStorage.getItem('token');
      });
  }

  ngAfterContentInit() {
    $('#nav-icon').click(function () {
      $(this).toggleClass('open');
    });
  }

  logOut() {
    this.authService.signOut();
  }

  changeLanguage(lang) {
    this.translate.use(lang);
    this.langService.changeLang(lang);
    this.langService.notifyLang(this.translate.currentLang);
    this.langService.setLang(lang);
    this.navService.changeLang(lang);
  }

  ngOnInit() {
    this.icon = this.navService.getIcon();
    this.user = this.authService.isAuth();
  }

  openModal() {
    const dialogRef: MatDialogRef<GetPersonalAddressDialogComponent> = this.matDialog.open(
      GetPersonalAddressDialogComponent,
      {
        width: '80vw',
        height: '60vh',
      });

    dialogRef.afterClosed()
      .subscribe(result => {
        // this.router.navigate([ 'profile/adress' ]);
      });
  }

}
