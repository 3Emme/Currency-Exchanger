# __Currency Exchanger__

#### __An application which a user can use to determine the exchange value for any amount of US Currency. September 11, 2020__

#### By _**Emme Buentiempo**_

## Description

This application was created as an Epicodus assignment, with the intent to have it serve as a demonstration of knowledge after the program's sixth week. For the time being this README will serve as a checklist to demonstrate the satisfaction of all project requirements and objectives. 

## Project requirements:

For this week's project, you'll create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API.

Navigate to the site to get a free key. Note that while the "Open Access" plan doesn't require an API key, it is heavily rate limited. You are expected to get an API key through the "Free Plan" - (and to protect that key in your application using environmental variables).

Here are the following things your application must do. Read through the list carefully to make sure you add all needed functionality!

A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won.
Users should be able to convert U.S. currency into at least 5 other types of currency.
If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)
Creating API Keys
You will need to make an account and get an API key. Do not use someone else's API key. The "Free Plan" allows for 2000 API calls per month. That should be more than enough for this project, but avoid making excessive API calls (such as accidental infinite loops) during development.

Visit the ExchangeRate-API site. Input your email address and click the "Get Free Key" button.
You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
Setup Instructions
Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable API_KEY in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)
Include .env in .gitignore.
Use at least two JavaScript files: one for UI logic and one for service logic.
This example assumes your API Key is stored in an API_KEY variable, as described in this lesson. In order to make your applications quick to grade, please follow the example exactly and do not rename your API_KEY variable to something different.
Additional Resources
Consult the ExchangeRate-API documentation for further information. Make sure you test your API calls in Postman before adding them to your code.

## Project Objectives:

  * Does the application correctly make an API call? **[Complete]**
  * Does the application correctly parse data from the API response? **[Complete]**
  * Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results? **[Complete]**
  * Did you follow all setup instructions, including storing your API key? **[Complete]**
  * Does the app separate logic into different JavaScript files and use a static method? **[Complete]**
  * Does the application correctly use webpack? **[Complete]**
  * Code and Git documentation follow best practices (setup instructions in README, .gitignore file excluding unnecessary content from repo, detailed well-formatted commit messages, etc.) **[Complete]**
  * Does the project demonstrate concepts covered this week? If prompted, are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology? **[Complete]**
  * Is the app in a presentable, portfolio-quality state? **[Complete]**
  * Is required functionality in place by the Friday deadline? **[Complete]**

## Business Specs

  1.[X] Given a dollar amount to be converted and a selected currency to exchange it for, program will create an ExchangeProfile object with the imput derived from the user
    * Input: inputCurrency = "USD", inputAmount = 10
    * Output: exchange1.inputAmount = 10

  2.[X] The ExchangeProfile object containing the users's input data will convert the US currency via an object method to determine the new value in the selected currency 
    * Input: inputCurrency = "EUR", inputAmount = 10
    * Output: exchange2.outputAmount = 8.449

  3.[X] The created object's conversion rates will be dynamic, pulling rates from another object that is already filled with property value keys of conversion rates and various currencies. 
    * Input: inputCurrency = "EUR", inputAmount = 10
    * Input: rate3 = {conversion_rates:{USD:1,EUR:0.8449}}
    * Output: exchange3.EUR = rate3.conversion_rates.EUR = 0.8449

  4.[X] The conversion object will fill with data pulled and parsed from an API call.
    * Input: *click submit button*
    * Output: rateResponse = {
      "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "time_last_update_unix": 1600128247,
    "time_last_update_utc": "Tue, 15 Sep 2020 00:04:07 +0000",
    "time_next_update_unix": 1600214767,
    "time_next_update_utc": "Wed, 16 Sep 2020 00:06:07 +0000",
    "base_code": "USD",
    "conversion_rates": {
        "USD": 1,
        "AED": 3.6721,
        etc, etc, etc
    }

  5.[X] The API call will display error messages in the eventuality that an error will occur.
    * Input: inputCurrency = "666"
    * Output: Error

## UI Specs

## Setup/Installation Requirements

* _go to https://www.exchangerate-api.com/ and apply for a free API key using your email address_
* _open terminal_
* _type "cd desktop", then press enter_
* _type "git clone https://github.com/3emme/CurrencyExchanger", then press enter_
* _locate and open folder on desktop named "CurrencyExchanger" with your console of choice_
* _in console, create a .env file with $touch .env_
* _open .env file and type in your API key like so: API_KEY=ENTERYOURKEYHERE_
* _in console, run $npm install_
* _in console, run $npm run build_
* _in console, run $npm run start_


## Support and contact details

_Please do not hesitate to contact me at emmettbuentiempo@gmail.com should you have any questions regarding this project_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_
* _eslint
* _Jest_
* _Babel_


### License

Copyright (c) 2020 **_Emme Buentiempo_**
This software is licensed under the MIT license.