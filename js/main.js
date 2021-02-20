let spese = 0
let vincite = 0


let winData = [
  { name: "sorry", img: "img/sorry.png", win: 0 },
  { name: "5", img: "img/5.webp", win: 5 },
  { name: "10", img: "img/10.jpg", win: 10 },
  { name: "20", img: "img/20.jpg", win: 20 },
  { name: "100", img: "img/100.webp", win: 100 },
  { name: "200", img: "img/200.jpg", win: 200 },
  { name: "500", img: "img/500.jpg", win:500 },
];

function selectPrize() {
  num = Math.floor(Math.random() * 1001);
  if (num >= 0 && num < 700) {
    return winData[0]
  }
  else if (num >= 700 && num < 850) {
    return winData[1]
  }
  else if (num >= 850 && num < 900) {
    return winData[2]
  }
  else if (num >= 900 && num < 950) {
    return winData[3]
  }
  else if (num >= 950 && num < 980) {
    return winData[4]
  }
  else if (num >= 980 && num < 999) {
    return winData[5]
  }
  else {
    return winData[6]
  }
  
}
  

function startGame() {
  spese += 5
  
  $(".spese").html(spese);
  selectBG = selectPrize();
  vincite += selectBG.win;
  $("#promo").wScratchPad({
    // the size of the eraser
    size: 70,
    // the randomized scratch image
    bg: selectBG.img,
    // give real-time updates
    realtime: true,
    // The overlay image
    fg: "img/overlay.png",
    // The cursor (coin) image
    cursor: 'url("img/coin1.png") 5 5, default',

    scratchMove: function (e, percent) {
      if (percent > 80) {
        $(".promo-container").show();
        if (selectBG.win != 0) {
          $(".promo-code").html("Hai vinto " + selectBG.win + " euro!!!");
          
        }else {
          $(".promo-code").html("Non hai vinto niente, mi dispiace");
        }
        
      }
    },
  });
}

startGame();

$(".btn").on("click", function () {
  $("#promo").remove();
  $(".promo-container").hide();
  $(".scratch-container").append('<div id="promo" class="scratchpad"></div>');
  $(".vincite").html(vincite);
  startGame();
});
