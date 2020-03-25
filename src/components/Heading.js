import React from 'react';
import { withTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import styled from 'styled-components';

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = ({ t }) => {
  return (
    <HeadingContainer>
      <h1>
        {t('main.title')} <br />
        <small>{t('main.title.disclaimer')}</small>
      </h1>
      <LanguageSelector />
    </HeadingContainer>
  );
};

export default withTranslation()(Heading);
