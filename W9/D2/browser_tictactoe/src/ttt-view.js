const Board = require("../ttt_node/board");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    console.log(this.game.currentPlayer)
  }

  setupBoard() {
    let board = "<ul>";
    for (let i = 0; i < 9; i++) {
      board += `<li id='${Math.floor(i / 3)}+${i % 3}'></li>`;
    }
    board + "</ul>";
    this.el.innerHTML = board;
    this.bindEvents();
  }
  
  
  bindEvents() {
    let list = this.el.children[0].children;
    for (let i = 0; i < list.length; i++) {
      let listItem = list[i];
      listItem.addEventListener("click", this.handleClick.bind(this));
    }
  }

  handleClick(e) {
    let item = e.target;
    let pos = item.id.split("+");
    let realPos = [];
    for (let i = 0; i < pos.length; i++) {
      realPos.push(Number(pos[i]));
    }
    item.classList.toggle(this.game.currentPlayer);
    let text = document.createTextNode(`${this.game.currentPlayer.toUpperCase()}`);
    item.appendChild(text);

    this.game.playMove(realPos);
  }

  makeMove(square) {}

}

module.exports = View;
