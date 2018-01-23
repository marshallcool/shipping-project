import { ActionReducerMap } from '@ngrx/store';
import { reducers } from '../components/wholesale/reducers/index';
import { contacts } from '../components/contact/reducers/contact.reducer';


export const reducer: ActionReducerMap<any> = {
  wholesale: reducers,
  contacts: contacts
};
