import { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import {
  Container,
  Header,
  Menu,
  LinksToCards,
  Cards,
  Footer,
  Popup,
  Statistics
} from './components'
import cards from './assets/cards'
import Context from './Context'



function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isPlayMode, setIsPlayMode] = useState(false)
  const [gameStatus, setGameStatus] = useState(null)

  const cardHeadings = cards[0];
  const cardBox = cards.slice(1);


  const value = {
    menuActive,
    setMenuActive,
    isPopupOpen,
    setIsPopupOpen,
    isPlayMode,
    setIsPlayMode,
    cardHeadings,
    setGameStatus,
    gameStatus
  }

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <Container>
          <Header />
          <Menu />
          <Switch>
            <Route exact path={'/'} component={LinksToCards} />
            {cardBox.map((item, index) =>
              <Route key={index} path={`/cards/${index}`}>
                <Cards key={index} items={item} itemHeading={cardHeadings[index]} />
              </Route>
            )}
            <Route exact path={'/statistics'} component={Statistics} />
            <Redirect to={'/'} />
          </Switch>
        </Container>
        <Footer />
        <Popup />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
