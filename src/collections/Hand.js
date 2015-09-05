// Generated by CoffeeScript 1.10.0
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.Hand = (function(superClass) {
  extend(Hand, superClass);

  function Hand() {
    return Hand.__super__.constructor.apply(this, arguments);
  }

  Hand.prototype.model = Card;

  Hand.prototype.initialize = function(array, deck, isDealer) {
    this.deck = deck;
    this.isDealer = isDealer;
  };

  Hand.prototype.hit = function() {
    return this.add(this.deck.pop());
  };

  Hand.prototype.hasAce = function() {
    return this.reduce(function(memo, card) {
      return memo || card.get('value') === 1;
    }, 0);
  };

  Hand.prototype.minScore = function() {
    return this.reduce(function(score, card) {
      return score + (card.get('revealed') ? card.get('value') : 0);
    }, 0);
  };

  Hand.prototype.stand = function() {
    return this.trigger('stand', this);
  };

  Hand.prototype.scores = function() {
    return [this.minScore(), this.minScore() + 10 * this.hasAce()];
  };

  Hand.prototype.under = function(score) {
    return score <= 21;
  };

  Hand.prototype.notOverScores = function() {
    return _.filter(this.scores(), this.under);
  };

  Hand.prototype.currentBestScore = function() {
    var notOverScores;
    notOverScores = this.notOverScores();
    if (notOverScores.length < 2) {
      return notOverScores[0] || null;
    } else {
      return Math.max.apply(null, notOverScores);
    }
  };

  return Hand;

})(Backbone.Collection);