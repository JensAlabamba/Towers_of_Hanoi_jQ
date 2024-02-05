class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.fromTowerIdx = null;

    this.$el.on("click", "ul", this.clickTower.bind(this));

    this.setupTowers();
    this.render();
  }
}

View.prototype.clickTower = function (event) {
  const clickedTowerIdx = $(event.currentTarget).index();

  if (this.fromTowerIdx === null) {
    this.fromTowerIdx = clickedTowerIdx;
  } else {
    if (!this.game.move(this.fromTowerIdx, clickedTowerIdx)) {
      alert("Invalid move!!!");
    }
    this.fromTowerIdx = null;
  }

  this.render();

  if (this.game.isWon()) {
    this.$el.off("click");
    this.$el.addClass("game-over");
    alert("Game won! Good work!");
  }
};

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
  const $towers = this.$el.find("ul");
  $towers.removeClass();

  if (this.fromTowerIdx !== null) {
    $towers.eq(this.fromTowerIdx).addClass("selected");
  }

  this.game.towers.forEach((disks, towerIdx) => {
    const $disks = $towers.eq(towerIdx).children();
    $disks.removeClass();

    disks.forEach((diskWidth, diskIdx) => {
      $disks.eq(-1 * (diskIdx + 1)).addClass(`disk-${diskWidth}`);
    });
  });
};

module.exports = View;
