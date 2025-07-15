import { Card } from '../Card';
import { Deck } from '../Deck';

describe('Deck', () => {
  it('should initialize with 52 cards', () => {
    const deck = new Deck();
    expect(deck.cards).toHaveLength(52);
  });

  it('should add a card', () => {
    const deck = new Deck();
    const card = Card.create({
      rank: 'Ace',
      suite: 'Spades',
    });

    deck.addCard(card);
    expect(deck.cards).toHaveLength(53);
  });

  it('should shuffle', () => {
    const deck = new Deck();
    const cardsBefore = deck.cards
      .flatMap((card) => card.rank + card.suite)
      .join();
    expect(deck.cards).toHaveLength(52);

    deck.shuffle();
    const cardsAfter = deck.cards
      .flatMap((card) => card.rank + card.suite)
      .join();
    expect(cardsBefore).not.toBe(cardsAfter);
    expect(deck.cards).toHaveLength(52);
  });

  it('should deal n number of cards', () => {
    const deck = new Deck();
    const cardsToDeal = Math.floor(Math.random() * 52);
    const hand = deck.deal(cardsToDeal);

    expect(hand).toHaveLength(cardsToDeal);
    expect(deck.cards).toHaveLength(52 - cardsToDeal);
  });
});
