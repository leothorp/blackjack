assert = chai.assert

describe "deck constructor", ->

  it "should create a card collection", ->
    collection = new Deck()
    assert.strictEqual collection.length, 52

describe "card constructor", ->

  it "should create a card", ->
    myCard = new Card(rank: 5, suit: 0)
    assert.strictEqual myCard.get('revealed'), true
    assert.strictEqual (myCard.get('rank') <= 12 && myCard.get('rank') >= 0), true

    
