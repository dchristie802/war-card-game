import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Stack, Typography } from '@mui/material';
import type React from 'react';
import { useMemo } from 'react';
import type { ICard } from '../models/Card';

interface IPlayerHand {
  cards: Array<ICard>;
  playerNumber: number;
}

const PlayerHand: React.FC<IPlayerHand> = ({ cards, playerNumber }) => {
  const cardCount = useMemo(() => cards.length, [cards]);
  const isWinner = useMemo(() => cardCount === 52, [cardCount]);
  const isWinning = useMemo(() => cardCount > 26, [cardCount]);

  return (
    <Stack alignItems={'center'} direction={'row'} spacing={1}>
      <Typography fontWeight={'700'}>{`Player ${playerNumber}:`}</Typography>
      <Typography variant={'body2'}>{cardCount}</Typography>
      {isWinning ? <EmojiEventsIcon /> : null}
      {isWinner ? <Typography variant={'body1'}>{'Winner!'}</Typography> : null}
    </Stack>
  );
};

export default PlayerHand;
