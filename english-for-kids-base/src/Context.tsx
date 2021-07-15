import { createContext, useState } from 'react';
import cards from './assets/cards';

export const GlobalContext = createContext<GlobalState | null>(null);

export interface GlobalState {
  menuActive: boolean;
  setMenuActive: (param: boolean) => void;
  isPopupOpen: boolean;
  setIsPopupOpen: (param: boolean) => void;
  isPlayMode: boolean;
  setIsPlayMode: (param: boolean) => void;
  cardHeadings: string[] | { word: string; translation: string; image: string; audioSrc: string; }[]
  setGameStatus: (param: string | null) => void;
  gameStatus: string | null;
}

interface Props {
  children: JSX.Element;
}

const GlobalProvider = ({ children }: Props) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isPlayMode, setIsPlayMode] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<string | null>(null);

  const cardHeadings = cards[0];
  const cardBox = cards.slice(1);

  return (
    <GlobalContext.Provider
      value={{
        menuActive,
        setMenuActive,
        isPopupOpen,
        setIsPopupOpen,
        isPlayMode,
        setIsPlayMode,
        cardHeadings,
        setGameStatus,
        gameStatus,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
