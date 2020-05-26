import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import MapChart from '../src/components/MapChart';
import { StatsProvider } from './hooks/statsContext';
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
      <Suspense fallback={null}>
        <GlobalStyle />
        <main>
          <StatsProvider>
            <DataPanel />
            <section>
              <Router>
                <MapChart path="/" />
                <ConfirmedChart path="/contagios" />
                <ConfirmedByProvinceChart path="/contagios-provincia" />
                {/* TODO: Imeplement source for recoveries */}
                {/* <DetailsChart path="/detalles" /> */} 
              </Router>
            </section>
          </StatsProvider>
        </main>
      </Suspense>
    </>
  );
}
