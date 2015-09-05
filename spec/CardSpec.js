// Generated by CoffeeScript 1.10.0
var assert;

assert = chai.assert;

describe("deck constructor", function() {
  return it("should create a card collection", function() {
    var collection;
    collection = new Deck();
    return assert.strictEqual(collection.length, 52);
  });
});

describe("card constructor", function() {
  return it("should create a card", function() {
    var myCard;
    myCard = new Card({
      rank: 5,
      suit: 0
    });
    assert.strictEqual(myCard.get('revealed'), true);
    return assert.strictEqual(myCard.get('rank') <= 12 && myCard.get('rank') >= 0, true);
  });
});