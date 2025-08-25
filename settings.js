require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAK2oGVtqLjuGUQQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFGEHACxEdsYg0F1tF8IJu7ENJFVjKzapCpCf89w10enoedmd7eSqyMjJPnjynvoO8IAxPcQO076Ck5Ao5bo+8KTHQwLiKY0xBByDIIdAANkJpabo3eevhi+yes+VheNrr2QSHQnWtFUc42mO9Md*Xygu4d0BZHVIS*aZgWh+6a1NPVrhHRZzZ13m9PveN8yC+7SoSZmH+*i6ax+3AXr6Ae1sREkryxCyPOMMUplPceJDQr8En4zomXhrx3vay75l9Krp6YYmXXmybXdcZoTJdE+qbahh9Df5pP+nm+aQcGavgXNVrB3UHs8sx3GErFXt18Do1nZl8jplpPuEzkuQYOQjnnPDmy7ybej8b0jqnQ3l0i15J0EVs72+XG0nSTweMpxPBH6yr6fn1i7xP+JEf58HY3w5OJ2LX6u7mH4Lwcg0X3W45OfXni26jIGiZu1+Be*RDK+f*w3tkuJ6EyaU6pOeDdLNTwZsm3tJCrtDtHWJDOFE48etimOtfg39jlb2P8kOZOqfBaf6GX4ssrLa4p+7Vm1oZSBdugbHiizz6hA95RX+H8jw9Ih8VN1i76iKCQ0mR5Es4jnK4ypZTczrPmTIX13Q*6YcXi0lb4rgliiw7pdfterDs9WkVbfu5bsyF6T4k7JKqp+TlMdEZNw4CmnTvAIoTwjiFnBT5I9ZTOwCia4AjivmDXsDlIDLcveAZb83ieDX81HYqb8FRt+Fvi5kxCpSbbq1mdCa+gA4oaRFhxjCyCeMFbWaYMZhgBrQ**+qAHN*4c3FtO1nqgJhQxtd5VaYFRB9b*biEUVRUOQ+aPDLaA6ZAEz*DmHOSJ6zlscohjY7kio0j5AxoMUwZ*jkhphgBjdMK*3StUaCWeNvdj9y3ZQg6IHsshCCggZ6sDERZVlRJlBVt8Af7VrdlYVl+yzEHHZA+0yRFkSVxJA6HylBqE9v4*SfAth7CHJKUAQ0YrnGh3eHYdISEDdeWpZuJbiQ6+BzoQxlP5ne4KUPizwS4nnSdglQpQRuYQrL0in2vOhVEeRuLS1jV5ss*FAEa8OPa8gfSoFzj4LINWW2*WlnS9KaOUDjl3p5WY+eaFsVIVn0PV2EUePjGcGGGBwGfQl8wN5ZaXUs+NJgzHCtjGglG*dJ2Q*hKIvxrM4OjRp9P2I3Ex9F7Od0slRGaX*Q9H0rvs8B1i5OcbM4DMfOd9+B2jONKHZRWn67FzXhnHRy+PCxFlE2shpDQnm2IWiX1U7MPz6Q*3iryUFO7qvY3Jvhh*Ry2C*zv1T2BtwoT751favx4TP7FkOOtzS4b5bzyslTvNlOHlrt8sy23xXnStxAt+k5l1Mi0KBuD+*2vDihTyOOCZkADMEe0IAh0AC2qVrJOHhe*aWaMHUf*4dYUMq5*2mBFMsw4zEqgSQO1L6nqqNd7Znm0KG3IjkADcuKt3XOr6UYvy4BD*uEqoD8+NAf3vwFQSwECFAMUAAAICACtqBlbai47hlEEAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
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
