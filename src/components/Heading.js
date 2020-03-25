import React from 'react';
import { withTranslation } from 'react-i18next';

const Heading = ({t}) => {
  return (
    <h1>
      {t('main.title')}{' '}
      <br />
      <small>{t('main.title.disclaimer')}</small>
    </h1>
  );
};

export default withTranslation()(Heading)
