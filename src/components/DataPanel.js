import React from 'react';
import Stats from '../components/Stats';
import Ecuador from '../components/Ecuador';
import Heading from '../components/Heading';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Warning from '../components/Warning';
import '../i18n';
import { withTranslation } from 'react-i18next';

const DataPanel = ({ t }) => {
  return (
    <section>
      <Warning />
      <Heading />
      <Nav />
      <div>
        <h2>
          {t('ecuador.title')}{' '}
          <span role='img' aria-label='Ecuador Flag'>
            🇪🇨
          </span>
        </h2>
        <Ecuador />
      </div>
      <div>
        <h2>{t('world.title')}</h2>
        <Stats url='https://covid19.mathdro.id/api/' />
      </div>
      <hr />
      <Footer />
    </section>
  );
};

export default withTranslation()(DataPanel);
