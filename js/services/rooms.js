app.factory('Articles', function ($http){

  var Articles = {
    'articles' : [
      {
        "title" : 'Article 1',
        "icon" : "http://www.returndates.com/backgrounds/siliconvalley.logo.png",
        "excerpt" : "Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at",
        "content": "lorem lorem Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. orem lorem Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. orem lorem Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. orem lorem Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam.",
        "sounds" : [
          {
            "title" : "this is pied",
            "url" : "./sounds/sv/this-pied-piper.wav",
            "background" : "./img/sv/cover.jpg"
          },
          {
            "title" : "Eat The Fish",
            "url" : "./sounds/sv/eat-the-fish.wav",
            "background" : "./img/sv/cover.jpg"
          },
          {
            "title" : "Tell something",
            "url" : "./sounds/sv/tell-something.wav",
            "background" : "./img/sv/cover.jpg"
          },

          {
            "title" : "Aviato !",
            "url" : "./sounds/sv/aviato.mp3",
            "background" : "./img/sv/cover.jpg"
          },

          {
            "title" : "Clowns",
            "url" : "./sounds/sv/clowns.wav",
            "background" : "./img/sv/cover.jpg"
          },

          {
            "title" : "Lets Pivot",
            "url" : "./sounds/sv/lets-pivot.mp3",
            "background" : "./img/sv/cover.jpg"
          },




        ],
      },

      {
        "title" : 'Article 2',
        "icon" : "img/bed.svg",
        "excerpt" : "Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at",
        "content": "lorem lorem Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. orem lorem Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. orem lorem Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. orem lorem Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam."
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

/*
var sounds = [
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/029/original/motherfuck.wav?1469744385",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/002/original/this-guy-fucks.wav?1469744419",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/006/original/eat-the-fish.wav?1469744321",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/030/original/shit-fight.wav?1469744305",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/035/original/two-shitty-commas.wav?1469744313",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/055/original/pied-piper.wav?1469744471",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/056/original/i'm-richard.wav?1469744053",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/037/original/doors-of-billionaire.wav?1469744332",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/013/original/apple-maps-bad.wav?1469744107",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/033/original/tell-something.wav?1469744317",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/031/original/yikes.wav?1469744275",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/057/original/this-pied-piper.wav?1469744030",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/036/original/clowns.wav?1469744321",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/505/original/aviato.mp3?1469744095",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/034/original/financially-ruined.wav?1469744300",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/058/original/word-better.wav?1469744253",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/032/original/after-lunch.wav?1469744320",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/507/original/fucked-up.mp3?1469744259",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/562/original/snack_dick.mp3?1469744421",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/508/original/lets-pivot.mp3?1469744427",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/506/original/pivot.mp3?1469744284",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/511/original/kind-invitation.mp3?1469744039",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/509/original/which-one.mp3?1469744221",
"https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/510/original/underage-kid.mp3?1469744041"];
*/
