// Generated by CoffeeScript 1.10.0
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.AppView = (function(superClass) {
  extend(AppView, superClass);

  function AppView() {
    return AppView.__super__.constructor.apply(this, arguments);
  }

  AppView.prototype.template = _.template('<button class="hit-button">Hit</button> <button class="stand-button">Stand</button> <span class="currentMoney"></span> <input type="number" class="betMoney" placeholder="Enter your bet"></input> <div class="player-hand-container"></div> <div class="dealer-hand-container"></div>');

  AppView.prototype.events = {
    'click .hit-button': function() {
      return this.model.get('playerHand').hit();
    },
    'click .stand-button': function() {
      this.model.get('playerHand').stand();
      this.$el.find('.stand-button').attr('disabled', true);
      this.$el.find('.hit-button').attr('disabled', true);
      this.model.set('betMoney', this.$el.find('.betMoney').val());
      this.$el.find('.betMoney').attr('disabled', true);
      return this.render();
    }
  };

  AppView.prototype.initialize = function() {
    this.render();
    this.$el.find('.currentMoney').text(this.model.get('currentMoney'));
    return this.model.on('change : winner');
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
