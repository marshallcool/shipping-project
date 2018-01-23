import { Contact, Themes } from './../models/contact';
import { Action } from '@ngrx/store';

export enum ContactActionTypes {
    GetContact = '[Contact] Get Contact',
    GetContactSuccess = '[Contact] Get Contact Success',
    GetContactError = '[Contact] Get Contact Error',
    AddContact = '[Contact] Add Contact',
    AddContactSuccess = '[Contact] Add Contact Success',
    AddContactError = '[Contact] Add Contact Error',
}

/**
 * Add Contact
 */
export class AddContact implements Action {
    readonly type = ContactActionTypes.AddContact;

    constructor(public payload: Contact) {}
}

export class AddContactSuccess implements Action {
    readonly type = ContactActionTypes.AddContactSuccess;

    constructor(public payload: Contact) {}
}

export class AddContactError implements Action {
    readonly type = ContactActionTypes.AddContactError;

    constructor(public payload: Contact) {}
}


/**
 * Get Contact
 */
export class GetContact implements Action {
    readonly type = ContactActionTypes.GetContact;
}

export class GetContactSuccess implements Action {
    readonly type = ContactActionTypes.GetContactSuccess;

    constructor(public payload: Themes[]) {}
}

export class GetContactError implements Action {
    readonly type = ContactActionTypes.GetContactError;

    constructor(public payload: any) {}
}

export type ContactActions =
    | AddContact
    | AddContactSuccess
    | AddContactError
    | GetContact
    | GetContactSuccess
    | GetContactError;
