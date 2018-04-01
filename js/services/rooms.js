app.factory('Articles', function ($http){

  var Articles = {
    'articles' : [
      {
        "title" : 'Longfin CEO Venkat S. Meenavalli on CNBC',
        "icon" : "http://www.returndates.com/backgrounds/siliconvalley.logo.png",
        "banner" : "./img/cnbc/cover.svg",
        "bgcolor": "#62C6F4",
        "sounds" : [
         {"title":"AllINeedIsSixMillionDollarsToGetIntoNASDAQ", "url":"./sounds/cnbc/AllINeedIsSixMillionDollarsToGetIntoNASDAQ.WAV","background":"./img/cnbc/cover.svg"},
{"title":"BecauseMyMarketIsAShadowBankingMarket","url":"./sounds/cnbc/BecauseMyMarketIsAShadowBankingMarket.wav","background":"./img/cnbc/cover.svg"},
{"title":"Because This Is Euphoric Mania", "url":"./sounds/cnbc/BecauseThisIsEuphoricMania.wav","background":"./img/cnbc/cover.svg"},
{"title":"Bell Floor Ringing", "url":"./sounds/cnbc/BellFloorRinging.wav","background":"./img/cnbc/cover.svg"},
{"title":"Beta Testing", "url":"./sounds/cnbc/BetaTesting.wav","background":"./img/cnbc/cover.svg"},
{"title":"Convert That Into Ethereum", "url":"./sounds/cnbc/ConvertThatIntoEthereum.wav","background":"./img/cnbc/cover.svg"},
{"title":"Cryptocurrencies Are Going To Play A Bigger Role In Microlending", "url":"./sounds/cnbc/CryptocurrenciesAreGoingToPlayABiggerRoleInMicrolending.wav","background":"./img/cnbc/cover.svg"},
{"title":"ImAShadowBanking Guy", "url":"./sounds/cnbc/ImAShadowBankingGuy.wav","background":"./img/cnbc/cover.svg"},
{"title":"Im Lending You In Ethereum", "url":"./sounds/cnbc/ImLendingYouInEthereum.wav","background":"./img/cnbc/cover.svg"}
,
{"title":"Im Not Listing My Coin Anywhere", "url":"./sounds/cnbc/ImNotListingMyCoinAnywhere.wav","background":"./img/cnbc/cover.svg"},
{"title":"Insane Market Cap You Know", "url":"./sounds/cnbc/InsaneMarketCapYouKnow.wav","background":"./img/cnbc/cover.svg"}
,
{"title":"I Own 55 Percent Of The Company", "url":"./sounds/cnbc/IOwn55PercentOfTheCompany.wav","background":"./img/cnbc/cover.svg"},
{"title":"Is It Not Genuine", "url":"./sounds/cnbc/IsItNotGenuine.wav","background":"./img/cnbc/cover.svg"},
{"title":"Microfinancing", "url":"./sounds/cnbc/Microfinancing.wav","background":"./img/cnbc/cover.svg"},
{"title":"My Share holders", "url":"./sounds/cnbc/MyShareholders.wav","background":"./img/cnbc/cover.svg"},
{"title":"One Thing", "url":"./sounds/cnbc/OneThing.wav","background":"./img/cnbc/cover.svg"},
{"title":"On NASDAQ", "url":"./sounds/cnbc/OnNASDAQ.WAV","background":"./img/cnbc/cover.svg"},
{"title":"reggae", "url":"./sounds/cnbc/reggae.wav","background":"./img/cnbc/cover.svg"},
{"title":"Shadow Banking Is Seventy Two Trillion Dollars", "url":"./sounds/cnbc/ShadowBankingIsSeventyTwoTrillionDollars.wav","background":"./img/cnbc/cover.svg"},
{"title":"Use That", "url":"./sounds/cnbc/UseThat.wav","background":"./img/cnbc/cover.svg"},
{"title":"We Are A Growing Company Well Grow", "url":"./sounds/cnbc/WeAreAGrowingCompanyWellGrow.wav","background":"./img/cnbc/cover.svg"},
{"title":"We Did A Genuine IPO", "url":"./sounds/cnbc/WeDidAGenuineIPO.WAV","background":"./img/cnbc/cover.svg"},
{"title":"We Dont Deserve This Market Cap", "url":"./sounds/cnbc/WeDontDeserveThisMarketCap.wav","background":"./img/cnbc/cover.svg"},
{"title":"Were A Profitable Company", "url":"./sounds/cnbc/WereAProfitableCompany.wav","background":"./img/cnbc/cover.svg"}
,
{"title":"Whats Wrong With It", "url":"./sounds/cnbc/WhatsWrongWithIt.wav","background":"./img/cnbc/cover.svg"},
{"title":"Yes", "url":"./sounds/cnbc/Yes.wav","background":"./img/cnbc/cover.svg"},
{"title":"Ziddu Coin", "url":"./sounds/cnbc/ZidduCoin.wav","background":"./img/cnbc/cover.svg"}
        ],
      },

     
    ],
    getArticles :  function(){
      return this.articles;
    },
    getArticle : function(id){
      return this.articles[id];
    }

  };


  return Articles;


});
