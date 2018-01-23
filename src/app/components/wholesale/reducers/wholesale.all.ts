import {
  WholesaleAllActionTypes,
  WholesaleAllActions
} from '../actions/wholesale.all';

export interface State {
  loaded: boolean;
  loading: boolean;
  data: any;
  error: string;
}

const initialState: State = {
  loaded: false,
  loading: false,
  data: [],
  error: null
};

export function reducer(state = initialState, action: WholesaleAllActions): State {
  switch (action.type) {
    case WholesaleAllActionTypes.GetWholesaleAll: {
      return {
        ...state,
        loading: true,
      };
    }
    case WholesaleAllActionTypes.GetWholesaleAllSuccess: {
      return {
        loaded: true,
        loading: false,
        data: action.payload,
        error: null
      };
    }
    case WholesaleAllActionTypes.GetWholesaleAllError:
      return {
        ...state,
        error: action.payload.message
      };
    default: {
      return state;
    }
  }
}
