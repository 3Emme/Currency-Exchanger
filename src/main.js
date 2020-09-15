import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeProfile } from './js/exchange.js';
import ExchangeRateService from './js/exchangeRateService.js';

$(document).ready(function() {

  $('#exchange_submit').click(function(event) {
      event.preventDefault();
      let exchange1;
      const inputCurrency = $('#input_currency').val();
      const inputAmount = $('#input_amount').val();
      console.log(`inputCurrency: ${inputCurrency}`);
      console.log(`inputAmount: ${inputAmount}`);
      $('#exchange_results').html("");
      $('#input_amount').val("");
      ExchangeRateService.getRates()
      .then(function(rateResponse) {
        exchange1 = new ExchangeProfile(inputCurrency,inputAmount,rateResponse);
        $('#exchange_results').append(exchange1.exchangeResults(inputCurrency,inputAmount));
      });
    })
  });