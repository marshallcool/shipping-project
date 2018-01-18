import {
  ContactActionTypes,
  ContactActions
} from './../actions/contact';

const initialState = {
  data: [],
  pending: false,
  error: null
};

export function contacts(state = initialState, action: ContactActions) {
  switch (action.type) {
    case ContactActionTypes.GetContact:
      return {
        ...state,
        pending: true,
        error: null
      };
    case ContactActionTypes.AddContact:
      return {
        ...state,
        pending: true,
        error: null,
        success: false
      };
    case ContactActionTypes.GetContactSuccess:
      return {
        ...state,
        data: action.payload,
        pending: false
      };
    case ContactActionTypes.AddContactSuccess:
      return {
        ...state,
        data: action.payload,
        pending: false,
        success: true
      };
    case ContactActionTypes.GetContactError:
    case ContactActionTypes.AddContactError:
      return {
        ...state,
        pending: false,
        error: action.payload.message
      };
    default:
      return state;
  }
}
