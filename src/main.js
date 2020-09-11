import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeProfile } from './exchange.js';

$(document).ready(function() {

  $('#exchange_request_form').submit(function(event) {
      event.preventDefault();
      const inputCurrency = $('#input_currency').val();
      const inputAmount = $('#input_amount').val();
      let exchange1;
      // clearFields();
      $('#exchange_results').html("");
      let exchange = new ExchangeProfile(inputCurrency)
      ExchangeRateService.getRates(inputCurrency)
      .then(function(rateResponse) {
        exchange1 = new ExchangeProfile(inputCurrency,inputAmount,rateResponse);
      });
      console.log(`exchange1: ${exchange1}`)
    })
  });