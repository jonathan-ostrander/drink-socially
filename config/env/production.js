'use strict';

module.exports = {
    db: 'mongodb://drink_socially:12b98ffbc5bd88812cc05ffa7444e8a2@oceanic.mongohq.com:10017/app23236793',
    app: {
        name: 'Drink Socially'
    },
    facebook: {
        clientID: '250982388421083',
        clientSecret: '212f6a5faa67601025e311d7bcec4753',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
