import { useContext, useState } from 'react';
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
import GlobalProvider from './Context';
import { ICard } from './components/interfaces';



function App() {
  const cardHeadings = cards[0];
  const cardBox = cards.slice(1);

  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
