import React from 'react';
import Stats from '../components/Stats';
import Ecuador from '../components/Ecuador';
import Heading from '../components/Heading';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function DataPanel() {
  return (
    <section>
      <Heading />
      <Nav />
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
      <Footer />
    </section>
  );
}
