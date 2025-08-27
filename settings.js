require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAZ1G1uj1uZ6TwQAAHAHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGLl6i+iIBRoVFBtUWmFjHgqrRAQKrCpAesJ*n6AvM*2wO9vLU5FkZJ4852TxA5AiYXiJWzD9AUqa1JDj7sjbEoMp0KvTCVPQBwhyCKYAOuggGLeJDoOLE5Ab2zvCUcIV6u03zYW4UTaY7W263c6cB3Dvg7KKsuT4h4JBKMxaxxG1ahatbqHqRKmeDuunnl0F9VOaqU5jqyuIX2baA7h3FWFCExKb5RnnmMJsiVsXJvRr8M3Hpr5YJWHXR69t2lhil5GbNQQNXXqZ154faPn8Ku5mUvM1+DsUim5uTY77azoRnCscO*5saYj2iY+CwfNe4eutPRMjPXuHz5KYYGQhTHjC2y*zLswp9WAaXRvBfkIOuRjtxiXPG9xbB*mgrWfe3hSR4csH82vAh5tZvmyf08uTA826UCVpK0gXOlD08CkZtGK1U8crbWuGh+YzcJd+eCX9P7xrq9t85Ia1cixWGFnuIDv6zKuKhvWaRy0QbXOph6voIPrK1+C7WqqPVR9ufZmcNmYcDuRT6Fm5guw4Mnc32Ugct9qWLP4EH*KK*gkl3Zdt6p0Wi9VYFrNoA4PztdgOfUgtj+iGma4ocrc2gtDrpQJUB2spzDOVLGC8W5HxaKnNIvXKVpuJdj6dT*VLK10N7+F1ohS3FgJT8d4HFMcJ4xTypCBdTFL6AKJ6i48U81d2AeqVLWztWGVS3tyuz6NosS*mpw21tXX4crGFYbXrncmiauMH0AclLY6YMYwWCeMFbR3MGIwxA9O*v*cBwTf+plvXTRb74JRQxn1SlVkB0YeoHx*h8VhUhG9bcjS6A6ZgKvwOY84TErOOxopAejwnNTbOkDMwPcGM4V8DYooRmHJa4V9LaxSo430RBMvJYTwHfZC*6pEgMAWSrIwEWVZUUZCV6fgv9q3pysKy*EYwB32QvaWJiiKLwkQYj5Wx2CV28fsvgF09hDlMMgamwLCNKx2MddPBt9rx53PNijUj1sDvgT6M8cZ8gNvykGycHvQfB1aRVFmCnmEGE88tQqm6FImy0gUPVo358A9FwBQcalOZ3MRwdO3BYiNshtfLUsMw2DySGQmTUvJFvX20iDomC9VbRrVg6746E*QZI+oIqVl+QN7cO+TX7VP+kov1Cit656I+QLhOjvhzs2b11NrDMIoC9Vrr8lrwOHfikao2ceXWk71k+gkd7W2*R9ZQzmET7kJryFcx9HulygN2WWtmG*ekyNhOPDmFE7PR4zfLvq5M9n5VJa9u6qTqXk8Jft18AjsB*1u6N+Cdw4R7*1ON97vkX*ZR3y*Y9VlJd26eaYN2adEyIM*7cl+kj8M5osXQqowGmXPKdHC*f++DMoP8VNC8+1MRRIsEgT6gRdVZ1iKn4g*NDN2ytPfJM8i49nsNdkmOGYd5CabiSB3KgjoUxbcslxblArIzmAI5dn077TzdamW55ZB*bBXQXh+0BvefUEsBAhQDFAAACAgABnUbW6PW5npPBAAAcAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '234703 345 1034',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
