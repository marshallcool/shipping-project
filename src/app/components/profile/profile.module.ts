import { TokenInterceptor } from './../../services/token.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import {
  FileUploadModule,
  TabViewModule
} from 'primeng/primeng';

import {
  MatRadioModule,
  MatSnackBarModule,
  MatTabsModule,
  MatDialogModule,
  MatCardModule,
  MatIconModule,
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CreditCardDirectivesModule } from 'angular-cc-library';

import { Select2Module } from 'ng2-select2';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BillingComponent } from './billing/billing.component';
import { AdressComponent } from './adress/adress.component';
import { CardsComponent } from './cards/cards.component';
import { HistoryComponent } from './history/history.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PasswordComponent } from './password/password.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileService } from './profile.service';
import { GuardProfileService } from './guard-profile.service';
import { ImageCropperModule } from 'ng2-img-cropper';
import { CoreModule } from '../../services/core.module';
import { PersonalInformationResolverService } from './personal-information/personal-information-resolver.service';
import { AdressUsaComponent } from './adress-usa/adress-usa.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { AdressAddComponent } from './adress/adress-add/adress-add.component';
import { AddAddressCompleteDialogComponent } from './adress/address-add-complete-dialog/address-add-complete-dialog.component';
import { EditAddressComponent } from './adress/edit-address/edit-address.component';
import { FooterModule } from '../footer/footer.module';
import { SharedModule } from '../../services/shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    ProfileRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Select2Module,
    FileUploadModule,
    TabViewModule,
    ImageCropperModule,
    CoreModule,
    FlexLayoutModule,
    CreditCardDirectivesModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    FooterModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    PersonalInformationComponent,
    AvatarComponent,
    BillingComponent,
    AdressComponent,
    CardsComponent,
    HistoryComponent,
    InvoiceComponent,
    PasswordComponent,
    SettingsComponent,
    AdressUsaComponent,
    AddFundsComponent,
    AdressAddComponent,
    AddAddressCompleteDialogComponent,
    EditAddressComponent
  ],
  providers: [
    ProfileService,
    GuardProfileService,
    PersonalInformationResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    AddAddressCompleteDialogComponent,
  ],
})
export class ProfileModule {
}
