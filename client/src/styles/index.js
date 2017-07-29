export const styles = {
  nav: {
    title: {
      color: 'white',
      cursor: 'pointer'
    },
    authButton: {
      backgroundColor: 'rgb(59, 62, 60)'
    }
  },
  header: {
    height: '32px',
    backgroundColor: 'rgb(59, 62, 60)',
    width: '100%',
    borderRadius: '0px',
    border: '0px',
    borderBottom: '1px solid rgb(129, 123, 121)',
    left: '0px',
    display: 'block',
    position: 'fixed',
    zIndex: 100
  },
  loginModal: {
    marginTop: '5%'
  },
  signupMsg: {
    textAlign: 'center'
  },
  searchDiv: {
    width: '200px'
  },
  showcase: {
    height: '1650px',
    borderRadius: '0px'
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

export const projectPageMainStyle = {
  header: {
    paddingBottom: '10px',
    marginBottom: '40px'
  },
  addContact: {
    div: {
      border: '1px solid transparent',
      borderRadius: '15px',
      textAlign: 'center',
      padding: '0px 2px',
      width: '105px',
      height: '30px',
      backgroundColor: 'rgb(240, 90, 64)',
      cursor: 'pointer',
      ':hover': { backgroundColor: '#ee4b28' }
    },
    plus: {color: 'rgb(255,255,255)', fontSize: '12px'},
    text: {fontWeight: '600', color: 'rgb(255,255,255)', fontSize: '17px'}
  }
};
