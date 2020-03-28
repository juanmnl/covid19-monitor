import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ErrorPanel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <ErrorPanel>
      <p>{t('error.label')}</p>
    </ErrorPanel>
  );
};

export default ErrorPage;
