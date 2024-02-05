const HanoiGame = require("./game.js");
const View = require("./hanoi-view.js");

$(() => {
  const rootEl = $(".hanoi");
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
