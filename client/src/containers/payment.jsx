import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../actions/inputActions.js';
import { submitForm } from '../actions/formActions.js';
import { styles } from '../styles';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.stripe = Stripe('pk_test_01qGTTxV9m6rilCgqGcYzcXn');

    this.handlePaymentSubmit = this.handlePaymentSubmit.bind(this);
  }

  componentDidMount() {
    console.log('Payment: ', this.props);

    this.card = this.stripe.elements().create('card', styles.paymentForm);
    this.card.mount('#card-element');
    this.card.on('change', e => this.validatePayment(e));

    let inputs = document.querySelectorAll('input.field');
    Array.prototype.forEach.call(inputs, input => {
      input.addEventListener('focus', () => input.classList.add('is-focused'));
      input.addEventListener('blur', () => input.classList.remove('is-focused'));
      input.addEventListener('keyup', () => {
        input.value.length === 0 ? input.classList.add('is-empty') : input.classList.remove('is-empty');
      });
    });
  }

  // sendPayment(result) {
  //   console.log('SendPayment results:', result);
  //   this.stripe.charges.create({
  //     amount: result.amount,
  //     currency: "usd",
  //     source: "tok_mastercard", // obtained with Stripe.js
  //     description: "Charge for TechStarter"
  //   }, function (err, charge) {
  //     if (err) {
  //       console.log('payment rejected!');
  //     } else {
  //       console.log('payment accepted!');
  //     }
  //   });
  // }

  handlePaymentSubmit(e) {
    e.preventDefault();

    this.stripe.createToken(this.card).then(result => {
      result.name = document.getElementById('cardholder-name').value;
      result.amount = document.getElementById('payment-amount').value;
      result.currency = 'usd';
      result.description = 'Charge for TechStarte';
      //console.log("Result:", result);

      let successElement = document.querySelector('.success');
      let errorElement = document.querySelector('.error');
      successElement.classList.remove('visible');
      errorElement.classList.remove('visible');

      if (result.error) {
        errorElement.textContent = result.error.message;
        errorElement.classList.add('visible');
        //console.log("Result Token: ",result);
      } else {
        console.log("Result Token: ",result.token);
        successElement.querySelector('.token').textContent = result.token.id;
        successElement.classList.add('visible');
      }
    });
  }

  render() {
    return (
      <div className='payment-body'>
        <form>
          <label>
            <input id='cardholder-name' className='field is-empty'/>
            <span><span>Name</span></span>
          </label>
          <label>
            <input id='payment-amount' className='field is-empty' placeholder='$0.00' type='number' min='0' step='0.01' />
            <span><span>Amount</span></span>
          </label>
          <label>
            <div id='card-element' className='field is-empty'></div>
            <span><span>Card</span></span>
          </label>
          <button onClick={this.handlePaymentSubmit}>Support this project</button>
          <div className='outcome'>
            <div className='error' role='alert'></div>
            <div className='success'>
              Success! Your Stripe token is <span className="token"></span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Payment;
