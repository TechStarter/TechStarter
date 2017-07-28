export const styles = {
  loginModal: {
    marginTop: '5%'
  },
  signupMsg: {
    textAlign: 'center'
  },
  searchDiv: {
    width: '200px'
  },
  footer: {
    button: {
      backgroundColor: 'Transparent',
      border: 'none',
      borderRadius: '0px',
      color: 'rgb(250, 250, 250)',
      outline: 'none'
    }
  },
  paymentForm: {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#8898AA',
        color: 'white',
        lineHeight: '36px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '19px',

        '::placeholder': {
          color: '#8898AA',
        },
      },
      invalid: {
        iconColor: '#e85746',
        color: '#e85746',
      }
    },
    classes: {
      focus: 'is-focused',
      empty: 'is-empty',
    },
  }
};

export const headerStyle = {
  height: '32px',
  width: '100%',
  borderRadius: '0px',
  border: '0px',
  left: '0px',
  display: 'block',
  padding: '0 30px',
  marginBottom: '0',
  zIndex: 1000
};

export const navStyle = {
  title: {
    color: 'rgb(59, 62, 60)',
    cursor: 'pointer',
  }
};

export const popoverStyle = {
  maxWidth: '420px',
  height: 'auto',
  paddingTop: '0px'
};

export const notificationStyle = {
  margin: '0',
  padding: '0',
  width: '400px',
  height: '100%'
};

export const notificationListEntryStyle = {
  ':hover': {
    backgroundColor: 'rgba(232, 232, 232, 0.5)'
  },
  cursor: 'pointer',
  listStyle: 'none',
  width: '100%',
  height: '62px',
  padding: '8px 14px',
  verticalAlign: 'middle',
  borderBottom: '1px solid rgb(232, 232, 232)'
};
