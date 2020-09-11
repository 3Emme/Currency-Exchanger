export class ExchangeProfile {
  constructor(inputCurrency,inputAmount) {
    this.USD = 1,
    this.EUR = 0.8449,
    this.inputCurrency = inputCurrency,
    this.inputAmount = inputAmount,
    this.outputAmount = this.exchangeResults(this.inputCurrency,this.inputAmount)
  }

  exchangeResults(inputCurrency,inputAmount) { 
  console.log(`inputCurrency: ${inputCurrency}, inputAmount: ${inputAmount}`);
  console.log(`this.EUR: ${this.EUR}`);
  let exchangeValue = this[inputCurrency];
  console.log(`exchangeValue: ${exchangeValue}`);
  let result = exchangeValue*inputAmount;
  console.log(`result: ${result}`);
  return result;
  }
}