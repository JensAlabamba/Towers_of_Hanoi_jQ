class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
  }
}

View.prototype.setupTowers = function () {
  const $ul = $("<ul>");
  let count = 3;
  for (let tower = 0; tower < 3; tower++) {
    for (let row = 0; row < 3; row++) {
      let $li = $("<li>");

      $li.data("pos", [tower, row]);
      if ($li.data("pos")[0] === 0) {
        $li.text(count);
        count--;
      }
      $ul.append($li);
    }
  }
  this.$el.append($ul);
};

View.prototype.render = function () {};

module.exports = View;
