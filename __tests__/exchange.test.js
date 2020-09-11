import { ExchangeProfile } from '../src/js/exchange.js';

describe('ExchangeProfile', () => {
  let exchange1;

  test('Test 1 should create an ExchangeProfile object', () =>{    
    exchange1 = new ExchangeProfile("USD",10);
    expect(exchange1.inputAmount).toEqual(10)
  });
});