export type cardSuites = 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades';
export type cardRanks = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace';


export interface ICard {
  suite: cardSuites,
  rank: cardRanks
}

export interface IDeck {
  cards: Array<ICard>,
  addCard: (card: ICard) => void;
  deal: (numCards: number) => Array<ICard>;
  dealOne: () => ICard | undefined;
  shuffle: () => void;
}

export class Deck implements IDeck {
  cards: Array<ICard> = [];

  constructor() {
    this.initializeDeck();
  }

  private initializeDeck = (): Array<ICard> => {
    const suites: Array<cardSuites> = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const ranks: Array<cardRanks> = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    const newDeck: Array<ICard> = []

    for (const suite of suites) {
      for (const rank of ranks) {
        newDeck.push({ suite, rank });
      }
    }

    return newDeck
  }

  addCard(): void {
    // TODO: Add card back into the deck
  }

  deal(numCards: number): Array<ICard> {
    // TODO: Deal the number of cards provided from the top of the deck
    console.log({ numCards })
    return []
  }

  dealOne(): ICard | undefined {
    // TODO: Deal one card from the top of the deck
    return {suite: 'Clubs', rank: '10'}
  }

  shuffle(): void {
    // TODO: Shuffle the deck
  }
}
