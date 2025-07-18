import { Card, type ICard, type Rank, type Suit } from './Card';

export interface IDeck {
  cards: Array<ICard>;
  addCard: (card: ICard) => void;
  deal: (numCards: number) => Array<ICard>;
  dealOne: () => ICard;
  shuffle: () => void;
}

export class Deck implements IDeck {
  cards: Array<ICard> = [];

  constructor() {
    this.initializeDeck();
    this.shuffle();
  }

  private initializeDeck = (): void => {
    const suits: Array<Suit> = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const ranks: Array<Rank> = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
      'Ace',
    ];
    const newDeck: Array<ICard> = [];

    for (let i = 0; i <= suits.length - 1; i++) {
      for (let j = 0; j <= ranks.length - 1; j++) {
        newDeck.push(
          Card.create({
            suit: suits[i],
            rank: ranks[j],
          })
        );
      }
    }

    this.cards = newDeck;
  };

  addCard(card: ICard): void {
    this.cards.push(card);
  }

  deal(numCards: number): Array<ICard> {
    const hand = this.cards.slice(0, numCards);
    this.cards = this.cards.slice(numCards);
    return hand;
  }

  dealOne(): ICard {
    const card = this.cards[0];
    this.cards.shift();
    return card;
  }

  shuffle(): void {
    for (let i = 0; i <= this.cards.length - 1; i++) {
      const card = this.cards[i];
      const newIndex = Math.floor(Math.random() * 52);
      this.cards.splice(i, 1);
      this.cards.splice(newIndex, 0, card);
    }
  }
}
