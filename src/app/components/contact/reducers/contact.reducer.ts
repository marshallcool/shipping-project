export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_ERROR = 'GET_CONTACTS_ERROR';

export function getContacts() {
  return {
    type: GET_CONTACTS
  };
}

const initialState = {
  data: [],
  pending: false,
  error: null
};

export function contacts(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        pending: true,
        error: null
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        data: payload.messages,
        pending: false
      };
    case GET_CONTACTS_ERROR:
      return {
        ...state,
        pending: false,
        error: 'Error'
      };
    default:
      return state;
  }
}
