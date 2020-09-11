export default class ExchangeRateService {  
  static getRates(inputCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${inputCurrency}`)
      .then(function(rateResponse) {
        return rateResponse;
      })
  }
}