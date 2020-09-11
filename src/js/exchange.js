export class ExchangeProfile {
  constructor(inputCurrency,inputAmount,exchangeRateObject) {
    this.USD = exchangeRateObject.USD,
    this.EUR = exchangeRateObject.EUR,
    this.inputCurrency = inputCurrency,
    this.inputAmount = inputAmount,
    this.outputAmount = this.exchangeResults(this.inputCurrency,this.inputAmount)
  }

  exchangeResults(inputCurrency,inputAmount) { 
  let exchangeValue = this[inputCurrency];
  let result = exchangeValue*inputAmount;
  return result;
  }
}

export class ExchangeRateObject {
  constructor() {
    this.USD = 1,
    this.EUR = 0.8449
  }
}