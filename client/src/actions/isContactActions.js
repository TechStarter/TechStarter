import axios from 'axios';
import { CHECKING_ISCONTACT_PENDING, CHECKING_ISCONTACT_FULFILLED, CHECKING_ISCONTACT_REJECTED } from '../constants';

export const isContact = (id, sessionOwner) => {
  return dispatch => {
    if (sessionOwner.id === id) {
      return dispatch({type: CHECKING_ISCONTACT_FULFILLED, payload: null});
    }
    dispatch({ type: CHECKING_ISCONTACT_PENDING });
    axios.get(`/api/contacts/${id}`)
      .then(response => {
        let isContact = false;

        if (response.data && response.data.status === 'contact') {
          isContact = true;
        }
        dispatch({type: CHECKING_ISCONTACT_FULFILLED, payload: isContact});
      })
      .catch(err => {
        dispatch({ type: CHECKING_ISCONTACT_REJECTED, payload: err });
      });
  };
};
