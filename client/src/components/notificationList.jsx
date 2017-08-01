import React from 'react';
import Radium from 'radium';
import { notificationStyle, notificationListEntryStyle } from '../styles';
import axios from 'axios';

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.acceptContactReq = this.acceptContactReq.bind(this);
  }

  acceptContactReq(e) {
    e.preventDefault();
    axios.put(`/api/contacts/${e.target.value}`, { status: 'contact' })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  declineContactReq(e) {

  }

  render() {
    return (
      <ul style={notificationStyle}>
        {this.props.notifications.map((notification, index) => (
          <li key={index} style={notificationListEntryStyle}>
            <div>
              {`Friend request from ${notification.originator.firstName} ${notification.originator.lastName}`}
            </div>
            <div>
              <button value={notification.originator.id} onClick={this.acceptContactReq}>Accept</button>
              <button value={notification.originator.id}>Decline</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Radium(NotificationList);
