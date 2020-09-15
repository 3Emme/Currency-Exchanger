import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeProfile } from './js/exchange.js';
import ExchangeRateService from './js/exchangeRateService.js';

$(document).ready(function() {

  $('#exchange_submit').click(function(event) {
      event.preventDefault();
      const inputCurrency = $('#input_currency').val();
      const inputAmount = $('#input_amount').val();
      console.log(`inputCurrency: ${inputCurrency}`);
      console.log(`inputAmount: ${inputAmount}`);
      let exchange1;
      let rateTest;
      // clearFields();
      $('#exchange_results').html("");
      // let exchange = new ExchangeProfile(inputCurrency)
      ExchangeRateService.getRates()
      .then(function(rateResponse) {
        rateTest = rateResponse;
        console.log(`rateTest: ${rateTest}`)
        exchange1 = new ExchangeProfile(inputCurrency,inputAmount,rateResponse);
        $('#exchange_results').append(exchange1.exchangeResults(inputCurrency,inputAmount));
      console.log(`exchange1: ${exchange1}`)
      });
      // $('#exchange_results').append(exchange1.exchangeResults(inputCurrency,inputAmount));
      // console.log(`exchange1: ${exchange1}`)
    })
  });