import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Header, Menu, LinksToCards, Cards, Footer, Popup } from './components'
import cards from './assets/cards'
import Context from './Context'



function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isPlayMode, setIsPlayMode] = useState(false)


  const value = {
    menuActive,
    setMenuActive,
    isPopupOpen,
    setIsPopupOpen,
    isPlayMode,
    setIsPlayMode
  }

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <Container>
          <Header />
          <Menu items={cards[0]} />
          <Route exact path={'/'} component={LinksToCards} />
          {cards.slice(1).map((item, index) =>
            <Route key={index} path={`/cards/${index}`}>
              <Cards key={index} items={item} />
            </Route>
          )}
        </Container>
        <Footer />
        <Popup />
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
