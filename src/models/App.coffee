# TODO: Refactor this model to use an internal Game Model instead
# of containing the game logic directly.
class window.App extends Backbone.Model
  initialize: ->
    @set 'currentMoney', 1000
    @set 'betMoney', 0
    @set 'winner', 'nobody'
    @set 'deck', deck = new Deck()
    @set 'playerHand', deck.dealPlayer()
    @set 'dealerHand', deck.dealDealer()

  
  stand: ->
    @get('dealerHand').at(0).flip()
    @get('dealerHand').hit() while @get('dealerHand').currentBestScore() < 17 && @get('dealerHand').currentBestScore()
    @determineWinner()
    @money()
      

  determineWinner: ->
    playerScore = @get('playerHand').currentBestScore()
    dealerScore = @get('dealerHand').currentBestScore()
    @set('winner', if playerScore > dealerScore then 'player' else 'dealer' )
    if playerScore == dealerScore 
      @set('winner', 'nobody') 
    winner = @get('winner')   
    # alert("#{winner} won")
    console.log(winner)

  money: ->
    winner = @get('winner')
    # console.log('currentMoney: '+ typeof @get('currentMoney')+' betMoney: '+ typeof @get('betMoney'))
    if (winner == 'player') then @set 'currentMoney', parseInt(@get('currentMoney')) + parseInt(@get('betMoney'))
    if (winner == 'dealer') then @set 'currentMoney', @get('currentMoney') - @get('betMoney')
