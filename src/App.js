import React from 'react';
import { Router } from '@reach/router';
import MapChart from '../src/components/MapChart';
import {
  ConfirmedChart,
  ConfirmedByProvinceChart,
  DetailsChart
} from '../src/components/Charts';
import { GlobalStyle } from '../src/components/GlobalStyle';
import DataPanel from '../src/components/DataPanel';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <DataPanel />
        <section>
          <Router>
            <MapChart path="/" />
            <ConfirmedChart path="/contagios" />
            <ConfirmedByProvinceChart path="/contagios-provincia" />
            <DetailsChart path="/detalles" />
          </Router>
        </section>
      </main>
    </>
  );
}
