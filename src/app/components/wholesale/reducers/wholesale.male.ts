import {
  WholesaleMaleActionTypes,
  WholesaleMaleActions
} from '../actions/wholesale.male';

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

export function reducer(state = initialState, action: WholesaleMaleActions): State {
  switch (action.type) {
    case WholesaleMaleActionTypes.GetWholesaleMale: {
      return {
        ...state,
        loading: true,
      };
    }
    case WholesaleMaleActionTypes.GetWholesaleMaleSuccess: {
      return {
        loaded: true,
        loading: false,
        data: action.payload,
        error: null
      };
    }
    case WholesaleMaleActionTypes.GetWholesaleMaleError:
      return {
        ...state,
        error: action.payload.message
      };
    default: {
      return state;
    }
  }
}
