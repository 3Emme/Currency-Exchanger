export default class ExchangeRateService {  
  static getRates() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(rateResponse) {
      if (!rateResponse.ok) {
        throw Error(rateResponse.statusText);
      }
      console.log(`rateResponse: ${rateResponse}`)
      return rateResponse;
    })
    .catch(function(error) {
      return error;
    })
}
}