import { Wholesale } from '../models/wholesale';
import { Action } from '@ngrx/store';

export enum WholesaleAllActionTypes {
  GetWholesaleAll = '[Wholesale] Get WholesaleAll',
  GetWholesaleAllSuccess = '[Wholesale] Get WholesaleAll Success',
  GetWholesaleAllError = '[Wholesale] Get WholesaleAll Error'
}

/**
 * Get Contact
 */
export class GetWholesaleAll implements Action {
  readonly type = WholesaleAllActionTypes.GetWholesaleAll;
}

export class GetWholesaleAllSuccess implements Action {
  readonly type = WholesaleAllActionTypes.GetWholesaleAllSuccess;

  constructor(public payload: Wholesale[]) {}
}

export class GetWholesaleAllError implements Action {
  readonly type = WholesaleAllActionTypes.GetWholesaleAllError;

  constructor(public payload: any) {}
}

export type WholesaleAllActions =
  | GetWholesaleAll
  | GetWholesaleAllSuccess
  | GetWholesaleAllError;
