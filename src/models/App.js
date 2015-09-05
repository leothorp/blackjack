// Generated by CoffeeScript 1.10.0
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.App = (function(superClass) {
  extend(App, superClass);

  function App() {
    return App.__super__.constructor.apply(this, arguments);
  }

  App.prototype.initialize = function() {
    var deck;
    this.set('currentMoney', 1000);
    this.set('winner', 'nobody');
    this.set('deck', deck = new Deck());
    this.set('playerHand', deck.dealPlayer());
    this.set('dealerHand', deck.dealDealer());
    return this.get('playerHand').on('stand', (function() {
      this.get('dealerHand').at(0).flip();
      while (this.get('dealerHand').currentBestScore() < 17 && this.get('dealerHand').currentBestScore()) {
        this.get('dealerHand').hit();
      }
      console.log(this.get('betMoney'));
      return this.determineWinner();
    }), this);
  };

  App.prototype.determineWinner = function() {
    var dealerScore, playerScore, winner;
    playerScore = this.get('playerHand').currentBestScore();
    dealerScore = this.get('dealerHand').currentBestScore();
    this.set('winner', playerScore > dealerScore ? 'player' : 'dealer');
    if (playerScore === dealerScore) {
      this.set('winner', 'nobody');
    }
    winner = this.get('winner');
    return alert(winner + " won");
  };

  App.prototype.money = function() {
    var winner;
    winner = this.get('winner');
    if (winner === 'player') {
      this.set('currentMoney', this.get('currentMoney') + this.get('betMoney'));
    }
    if (winner === 'dealer') {
      return this.set('currentMoney', this.get('currentMoney') - this.get('betMoney'));
    }
  };

  return App;

})(Backbone.Model);
