// Generated by CoffeeScript 1.10.0
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.AppView = (function(superClass) {
  extend(AppView, superClass);

  function AppView() {
    return AppView.__super__.constructor.apply(this, arguments);
  }

  AppView.prototype.template = _.template('<button class="hit-button">Hit</button> <button class="stand-button">Stand</button> <input type="number" class="betMoney" placeholder="Enter your bet"></input> <span class="currentMoney">Your money: $</span> <div class="winner">Winner: </div> <div class="player-hand-container"></div> <div class="dealer-hand-container"></div>');

  AppView.prototype.events = {
    'click .hit-button': function() {
      return this.model.get('playerHand').hit();
    },
    'click .stand-button': function() {
      this.model.get('playerHand').stand();
      this.$el.find('.stand-button').attr('disabled', true);
      this.$el.find('.hit-button').attr('disabled', true);
      if (this.$el.find('.betMoney').val() > this.model.get('currentMoney')) {
        this.$el.find('.betMoney').val(this.model.get('currentMoney'));
        alert('bet exceeds current money.  Bet changed to equal current money.');
      }
      this.model.set('betMoney', this.$el.find('.betMoney').val() || 0);
      console.log(this.model.get('betMoney'));
      this.$el.find('.betMoney').attr('disabled', true);
      this.model.stand();
      this.$el.find('.currentMoney').text('Your money: $' + this.model.get('currentMoney'));
      this.model.set('playerHand', this.model.get('deck').dealPlayer());
      this.model.set('dealerHand', this.model.get('deck').dealDealer());
      this.$el.find('.winner').text('Winner: ' + this.model.get('winner'));
      return setTimeout(((function(_this) {
        return function() {
          return _this.initialize();
        };
      })(this)), 1500);
    }
  };

  AppView.prototype.initialize = function() {
    this.render();
    return this.$el.find('.currentMoney').text('Your money: $' + this.model.get('currentMoney'));
  };

  AppView.prototype.render = function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.player-hand-container').html(new HandView({
      collection: this.model.get('playerHand')
    }).el);
    return this.$('.dealer-hand-container').html(new HandView({
      collection: this.model.get('dealerHand')
    }).el);
  };

  return AppView;

})(Backbone.View);
