import { Button } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { PlayerHand } from './components';
import { GameLayout } from './layouts';
import { Deck } from './models';
import type { ICard } from './models/Card';

const moveCardsToBack = (cards: Array<ICard>, index: number): Array<ICard> => {
  if (index <= 0 || index >= cards.length) {
    return [...cards];
  }

  const usedCards = cards.slice(0, index);
  const unusedCards = cards.slice(index);
  return [...unusedCards, ...usedCards];
};

const updateHands = (
  winnerHand: Array<ICard>,
  loserHand: Array<ICard>,
  index: number
): {
  winner: Array<ICard>;
  loser: Array<ICard>;
} => {
  const loserCardsUsed = loserHand.slice(0, index);
  const winner = moveCardsToBack(winnerHand, index);
  winner.push(...loserCardsUsed);

  const loser = loserHand.slice(index);

  return {
    winner,
    loser,
  };
};

const getNextAvailableCard = (cards: Array<ICard>, index: number): ICard => {
  return index < cards.length ? cards[index] : cards[cards.length - 1];
};

const App = () => {
  const deck = new Deck();
  const [player1Hand, setPlayer1Hand] = useState(deck.deal(26));
  const [player2Hand, setPlayer2Hand] = useState(deck.deal(26));

  const isGameOver = useMemo(
    () => player1Hand.length === 52 || player2Hand.length === 52,
    [player1Hand, player2Hand]
  );

  const drawCards = useCallback(
    (index?: number) => {
      let currentIndex = index ?? 0;
      const p1Card = getNextAvailableCard(player1Hand, currentIndex);
      const p2Card = getNextAvailableCard(player2Hand, currentIndex);

      if (p1Card.value === p2Card.value) {
        currentIndex += 4;
        drawCards(currentIndex);
      } else if (p1Card.value > p2Card.value) {
        const { winner, loser } = updateHands(
          player1Hand,
          player2Hand,
          currentIndex + 1
        );
        setPlayer1Hand(winner);
        setPlayer2Hand(loser);
      } else {
        const { winner, loser } = updateHands(
          player2Hand,
          player1Hand,
          currentIndex + 1
        );
        setPlayer1Hand(loser);
        setPlayer2Hand(winner);
      }
    },
    [player1Hand, player2Hand]
  );

  return (
    <GameLayout>
      <PlayerHand cards={player1Hand} playerNumber={1} />
      <PlayerHand cards={player2Hand} playerNumber={2} />
      <Button onClick={() => drawCards()} disabled={isGameOver}>
        {'Draw'}
      </Button>
    </GameLayout>
  );
};

export default App;
