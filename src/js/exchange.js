export class ExchangeProfile {
  constructor(inputCurrency,inputAmount,exchangeRateObject) {
    this.USD = exchangeRateObject.conversion_rates.USD,
    this.EUR = exchangeRateObject.conversion_rates.EUR,
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