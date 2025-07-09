import { Deck } from "./deck";

describe('Deck', () => {
  it('should initialize with 52 cards', () => {
    const deck = new Deck();
    expect(deck.cards).toHaveLength(52);
  });
});
