export type Suite = 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades' | 'Unknown';
export type Rank =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'Jack'
  | 'Queen'
  | 'King'
  | 'Ace'
  | 'Unknown';

export interface ICard {
  suite: Suite;
  rank: Rank;
  value: number;
}

const create = (card?: Partial<ICard>): ICard => ({
  rank: card?.rank ?? 'Unknown',
  suite: card?.suite ?? 'Unknown',
  value: getRankWeight(card?.rank ?? 'Unknown'),
});

const getRankWeight = (rank: Rank): number => {
  switch (rank) {
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    case '9':
      return 9;
    case '10':
      return 10;
    case 'Jack':
      return 11;
    case 'Queen':
      return 12;
    case 'King':
      return 13;
    case 'Ace':
      return 14;
    default:
      return -1;
  }
};

export const Card = {
  create,
};
