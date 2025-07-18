import { Container } from '@mui/material';

interface IGameLayout {
  children: React.ReactNode;
}

const GameLayout: React.FC<IGameLayout> = ({ children }) => {
  return <Container maxWidth={'lg'}>{children}</Container>;
};

export default GameLayout;
