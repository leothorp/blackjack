class window.AppView extends Backbone.View
  template: _.template '
    <button class="hit-button">Hit</button> <button class="stand-button">Stand</button> 
    
    <input type="number" class="betMoney" placeholder="Enter your bet"></input> 
      <span class="currentMoney">Your money: $</span>
    <div class="winner">Winner: </div> 
    <div class="player-hand-container"></div>
    <div class="dealer-hand-container"></div>
    
  '

  events:
    'click .hit-button': -> @model.get('playerHand').hit()
    'click .stand-button': -> 
      @model.get('playerHand').stand()
      @$el.find('.stand-button').attr('disabled',true)
      @$el.find('.hit-button').attr('disabled',true)
      
      if @$el.find('.betMoney').val() > @model.get('currentMoney')  
        @$el.find('.betMoney').val(@model.get('currentMoney'))
        alert('bet exceeds current money.  Bet changed to equal current money.')

      @model.set('betMoney', @$el.find('.betMoney').val() or 0)
      console.log(@model.get('betMoney')) 
      @$el.find('.betMoney').attr('disabled',true)

      @model.stand()
      @$el.find('.currentMoney').text('Your money: $' + @model.get('currentMoney'))
      @model.set('playerHand', @model.get('deck').dealPlayer())
      @model.set('dealerHand', @model.get('deck').dealDealer())
      @$el.find('.winner').text('Winner: ' + @model.get('winner'))
      setTimeout((=> @initialize()),1500)



  initialize: ->
    @render()
    @$el.find('.currentMoney').text('Your money: $' + @model.get('currentMoney'))


  render: ->
    @$el.children().detach()
    @$el.html @template()
    @$('.player-hand-container').html new HandView(collection: @model.get 'playerHand').el
    @$('.dealer-hand-container').html new HandView(collection: @model.get 'dealerHand').el

 

