export type Suite = 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades' | 'Unknown';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace' | 'Unknown';

export interface ICard {
  suite: Suite,
  rank: Rank
}

const create = (card?: Partial<ICard>): ICard => {
  return {
    rank: card?.rank ?? 'Unknown',
    suite: card?.suite ?? 'Unknown'
  }
}

export const Card = {
  create: create
}
