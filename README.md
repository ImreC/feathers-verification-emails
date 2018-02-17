# feathers-verification-emails

>

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feathers-verification-emails; npm install
    ```

3. Start your app

To start the app you need three environment variables.
`process.env.FROM_EMAIL` the email adress where you want your notifications to come from
`process.env.SMTP_USER` the user from your Amazon SES smtp account
`process.env.SMTP_PASS` the password from your Amazon SES smtp account

    ```
    npm start
    ```


## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
