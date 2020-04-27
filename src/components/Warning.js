import React from 'react';
import styled from 'styled-components';

const WarningContainer = styled.div`
  display: flex;
  justify-content: space-between;
  display: block;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);

  p {
    color: var(--color-danger);
    font-size: 0.6rem;
    line-height: 0.8rem;
    text-transform: uppercase;

    a {
      color: var(--color-danger);
      font-size: 0.6rem;
      text-transform: uppercase;
    }
  }
`;

const Warning = () => {
  return (
    <WarningContainer>
      <p>
        ** Esta página no está actualizada desde el{' '}
        <b>
          <em>24/04/2020</em>
        </b>{' '}
        debido a las inconsistencias, aparentemente voluntarias y recurrentes,
        de la fuente oficial. **
      </p>
      <p>
        Si quieres ayudar a automatizar los datos:{' '}
        <a href='https://github.com/juanmnl/covid19-monitor/issues/33'>
          puedes hacerlo aquí
        </a>
      </p>
    </WarningContainer>
  );
};

export default Warning;
