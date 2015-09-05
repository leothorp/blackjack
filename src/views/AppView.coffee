class window.AppView extends Backbone.View
  template: _.template '
    <button class="hit-button">Hit</button> <button class="stand-button">Stand</button> 
    <span class="currentMoney"></span>
    <input type="number" class="betMoney" placeholder="Enter your bet"></input>  
    <div class="player-hand-container"></div>
    <div class="dealer-hand-container"></div>
  '

  events:
    'click .hit-button': -> @model.get('playerHand').hit()
    'click .stand-button': -> 
      @model.get('playerHand').stand()
      @$el.find('.stand-button').attr('disabled',true)
      @$el.find('.hit-button').attr('disabled',true)
      @model.set('betMoney', @$el.find('.betMoney').val())
      @$el.find('.betMoney').attr('disabled',true)
      @render() 

  initialize: ->
    @render()
    @$el.find('.currentMoney').text(@model.get('currentMoney'))
    @model.on('change : winner', )
#call money function in AppModel, update currentMoney and clear currentBet


  render: ->
    @$el.children().detach()
    @$el.html @template()
    @$('.player-hand-container').html new HandView(collection: @model.get 'playerHand').el
    @$('.dealer-hand-container').html new HandView(collection: @model.get 'dealerHand').el

 

