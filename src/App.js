import React from 'react';
import { ShowWindowDimensions } from '../src/hooks/useWindowSize';
import Stats from '../src/components/Stats';
import Ecuador from '../src/components/Ecuador';
import MapSection from '../src/components/MapSection';
import {
  ConfirmedChart,
  ConfirmedByProvinceChart,
  DetailsChart
} from '../src/components/Charts';
import { GlobalStyle } from '../src/components/GlobalStyle';
import { Router, Link } from '@reach/router';
import styled from 'styled-components';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : {};
};

const Nav = styled.nav`
  background-color: hsla(164, 23%, 10%, 1);
  margin: 0.5rem 0;
  padding: 0.2rem 0.3rem;
  border-radius: 2px;
  text-align: right;

  > a {
    font-weight: bolder;
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
    line-height: 1.6rem;
    text-transform: uppercase;
    margin-left: 0.4rem;
    text-decoration: none;
    background-color: transparent;
    transition: 280ms background-color ease-in-out;
    border-radius: 2px;

    :hover {
      background-color: var(--color-secondary);
      color: var(--color-background);
      transition: 280ms background-color ease-in-out;
    }
    :active {
      transform: scale(0.9);
      transition: 280ms background-color ease-in-out;
    }
  }

  .active {
    background-color: var(--color-primary);
    color: var(--color-background);
    transition: 280ms background-color ease-in-out;
  }
`;

const App = () => {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <>
      <GlobalStyle />
      <main>
        <section>
          <h1>
            Monitor COVID-19/SARS-CoV-2 Ecuador*
            <br />
            <small>*Esta NO es una fuente oficial</small>
          </h1>
          <Nav>
            <Link to="/" getProps={isActive}>
              Mapa
            </Link>
            <Link to="contagios-provincia" getProps={isActive}>
              X Provincia
            </Link>
            <Link to="contagios" getProps={isActive}>
              X Día
            </Link>
            <Link to="detalles" getProps={isActive}>
              Detalle Confirmados
            </Link>
          </Nav>
          <div>
            <h2>Mundo</h2>
            <Stats url="https://covid19.mathdro.id/api/" />
          </div>

          <div>
            <h2>
              Ecuador{' '}
              <span role="img" aria-label="Ecuador Flag">
                🇪🇨
              </span>
            </h2>
            <Ecuador />
          </div>
          <footer>
            <ShowWindowDimensions /> <br />
            <a href="https://www.twitter.com/_juanmnl">
              &copy;{year} - juanmnl
            </a>
          </footer>
        </section>
        <section>
          <Router>
            <MapSection path="/" />
            <ConfirmedChart path="/contagios" />
            <ConfirmedByProvinceChart path="/contagios-provincia" />
            <DetailsChart path="/detalles" />
          </Router>
        </section>
      </main>
    </>
  );
};

export default App;
