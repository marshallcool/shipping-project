import { Wholesale } from '../models/wholesale';
import { Action } from '@ngrx/store';

export enum WholesaleMaleActionTypes {
  GetWholesaleMale = '[WholesaleMale] Get WholesaleMale',
  GetWholesaleMaleSuccess = '[WholesaleMale] Get WholesaleMale Success',
  GetWholesaleMaleError = '[WholesaleMale] Get WholesaleMale Error'
}

/**
 * Get Contact
 */
export class GetWholesaleMale implements Action {
  readonly type = WholesaleMaleActionTypes.GetWholesaleMale;
}

export class GetWholesaleMaleSuccess implements Action {
  readonly type = WholesaleMaleActionTypes.GetWholesaleMaleSuccess;

  constructor(public payload: Wholesale[]) {}
}

export class GetWholesaleMaleError implements Action {
  readonly type = WholesaleMaleActionTypes.GetWholesaleMaleError;

  constructor(public payload: any) {}
}

export type WholesaleMaleActions =
  | GetWholesaleMale
  | GetWholesaleMaleSuccess
  | GetWholesaleMaleError;
