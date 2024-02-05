class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
  }
}

View.prototype.setupTowers = function () {
  for (let tower = 0; tower < 3; tower++) {
    const $ul = $("<ul>");
    let count = 1;
    for (let row = 0; row < 3; row++) {
      let $li = $("<li>");
      $li.data("pos", [tower, row]);
      if ($li.data("pos")[0] === 0) {
        $li.data("item", count);
        count++;
      }
      $ul.append($li);
    }
    this.$el.append($ul);
  }
};

View.prototype.render = function () {
  const $items = this.$el.find("li[data-item]");

  $items.each(function () {
    const $li = $(this);
    const item = $li.data("item");

    if (item) {
      const width = item * 50; // Assuming you want to multiply by 50
      $li.addClass("item").width(width);
    }
  });
};

module.exports = View;
