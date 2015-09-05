assert = chai.assert

describe 'deck', ->
  deck = null
  hand = null

  beforeEach ->
    deck = new Deck()
    hand = deck.dealPlayer()

  describe 'hit', ->
    it 'should give the last card from the deck', ->
      assert.strictEqual deck.length, 50
      assert.strictEqual deck.last(), hand.hit().at(hand.length-1)
      assert.strictEqual deck.length, 49

#test the scoring of hands and our model of a deck of cards
  
  describe 'scoring', -> 
    it 'should add up the hand\'s score correctly', ->
      assert.strictEqual hand.at(0).get('value') + hand.at(1).get('value') , hand.minScore()
