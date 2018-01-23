import * as fromWholesaleAll from './wholesale.all';
import * as fromWholesaleMale from './wholesale.male';

export interface  WholesaleState {
  wholesaleAll: fromWholesaleAll.State;
  wholesaleMale: fromWholesaleMale.State;
}

export const reducers = {
  wholesaleAll: fromWholesaleAll.reducer,
  wholesaleMale: fromWholesaleMale.reducer
};
