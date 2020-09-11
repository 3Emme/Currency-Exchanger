import { ExchangeProfile, ExchangeRateObject } from '../src/js/exchange.js';

describe('ExchangeProfile', () => {

  test('Test 1 should create an ExchangeProfile object', () =>{    
    let rate1 = new ExchangeRateObject;
    let exchange1 = new ExchangeProfile("USD",10,rate1);
    expect(exchange1.inputAmount).toEqual(10)
  });

  test('Test 2 should determine the value of ExchangeProfile.outputAmount', () =>{    
    let rate2 = new ExchangeRateObject;
    let exchange2 = new ExchangeProfile("EUR",10,rate2);
    expect(exchange2.outputAmount).toEqual(8.449)
  });

  test('Test 3 should create an ExchangeRateObject object, which will determine the currency values of the ExchangeProfile', () =>{    
    let rate3 = new ExchangeRateObject;
    let exchange3 = new ExchangeProfile("EUR",10,rate3);
    expect(exchange3.EUR).toEqual(rate3.EUR)
  });
});