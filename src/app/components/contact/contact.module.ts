import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TokenInterceptor } from '../../services/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';
import { FooterModule } from '../footer/footer.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  MatSnackBarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSortModule,
  MatTooltipModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';
import { CoreModule } from '../../services/core.module';
import { contacts } from './reducers/contact.reducer';
import { ContactEffects } from './effects/contact.effects';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FooterModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSortModule,
    MatTooltipModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forFeature('contacts', contacts),
    EffectsModule.forFeature([ContactEffects]),
  ],
  declarations: [ContactComponent],
  providers: [
    ContactService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ContactModule { }
