import React from 'react';
import { ShowWindowDimensions } from '../src//hooks/useWindowSize';
import Map from '../src/components/MapGL';
import Stats from '../src/components/Stats';
import Ecuador from '../src/components/Ecuador';
import SubScreen from './components/SubScreen';
import { GlobalStyle } from '../src/components/GlobalStyle';

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
          <div>
            <h2>Mundo</h2>
            <Stats url="https://covid19.mathdro.id/api/" />
          </div>
          <div>
            <h2>Ecuador</h2>
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
          <SubScreen />
          <Map lat={-1.8} lng={-78.2} z={6.3} />
        </section>
      </main>
    </>
  );
};

export default App;
