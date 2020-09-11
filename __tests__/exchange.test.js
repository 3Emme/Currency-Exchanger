import { ExchangeProfile } from '../src/js/exchange.js';

describe('ExchangeProfile', () => {
  let exchange1;
  let exchange2;

  test('Test 1 should create an ExchangeProfile object', () =>{    
    exchange1 = new ExchangeProfile("USD",10);
    expect(exchange1.inputAmount).toEqual(10)
  });

  test('Test 2 should determine the value of ExchangeProfile.outputAmount', () =>{    
    exchange2 = new ExchangeProfile("EUR",10);
    expect(exchange2.outputAmount).toEqual(8.449)
  });
});