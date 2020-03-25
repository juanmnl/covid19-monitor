import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const RadioButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 2;
  font-size: 0.7rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-left: 1rem;
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = event => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <RadioButtons onChange={changeLanguage}>
      <Label htmlFor="es">
        <input
          id="es"
          type="radio"
          value="es"
          name="language"
          aria-label="Selecciona Español como idioma"
          defaultChecked
        />{' '}
        Español
      </Label>
      <Label htmlFor="qwc">
        <input
          id="qwc"
          type="radio"
          value="qwc"
          name="language"
          aria-label="Selecciona Quichua como idioma"
        />{' '}
        Kichwa
      </Label>
    </RadioButtons>
  );
};

export default LanguageSelector;
