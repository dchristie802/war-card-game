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
      suit: 'Spades',
    });

    deck.addCard(card);
    expect(deck.cards).toHaveLength(53);
  });

  it('should shuffle', () => {
    const deck = new Deck();
    const cardsBefore = deck.cards
      .flatMap((card) => card.rank + card.suit)
      .join();
    expect(deck.cards).toHaveLength(52);

    deck.shuffle();
    const cardsAfter = deck.cards
      .flatMap((card) => card.rank + card.suit)
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

  it('should deal one card', () => {
    const deck = new Deck();
    const expectedCard = deck.cards[0];
    const card = deck.dealOne();

    expect(expectedCard.rank).toEqual(card.rank);
    expect(expectedCard.suit).toEqual(card.suit);
    expect(deck.cards).toHaveLength(51);
  });
});
