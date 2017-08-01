import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { projectPageMainStyle } from '../styles';
import { checkIfValueExistInArray } from '../../../helpers/util';

const ContactRequestButton = ({ user, sendContactRequest, match, contacts }) => {
  let button = null;
  let isContact = checkIfValueExistInArray(contacts.content, 'contactsId', match.params.userId);

  if (user.isLoggedIn && isContact) {
    button = (
      <div style={projectPageMainStyle.addContact.div}>
        <span style={projectPageMainStyle.connected}>
          Connected
        </span>
      </div>
    );
  } else if (user.isLoggedIn && !isContact) {
    button = (
      <div style={projectPageMainStyle.addContact.div} onClick={e => sendContactRequest(e, match.params.userId)}>
        <span style={projectPageMainStyle.addContact.text}>
          <span style={projectPageMainStyle.addContact.plus}>+</span> Add contact
        </span>
      </div>
    );
  }

  return (
    <div>
      {button}
    </div>
  );
};

const mapStateToProps = state => ({ contacts: state.contacts });

export default connect(mapStateToProps)(Radium(ContactRequestButton));
