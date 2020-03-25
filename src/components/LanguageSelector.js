import React from 'react'
import { useTranslation } from 'react-i18next'

const inputStyle = {
  marginLeft: "3em",
  marginBottom: "1em"
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  };
  return (
    <div onChange={changeLanguage}>
      <small>
        <input type="radio" value="es" name="language" aria-label="Selecciona Español como idioma" defaultChecked /> Español
        <input type="radio" value="qwc" name="language" aria-label="Selecciona Quechua como idioma" style={ inputStyle }/> Kichwa
      </small>
    </div>
  )
};

export default LanguageSelector
