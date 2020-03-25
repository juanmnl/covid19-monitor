import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { withTranslation } from 'react-i18next';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : {};
};

const Navigation = styled.nav`
  background-color: var(--color-black);
  margin: 0.5rem 0;
  padding: 0.3rem 0.3rem;
  border-radius: 2px;
  text-align: right;

  > a {
    display: inline-block;
    font-weight: bolder;
    padding: 0.2rem 0.3rem;
    font-size: 0.65rem;
    line-height: 1rem;
    text-transform: uppercase;
    margin-left: 0.4rem;
    text-decoration: none;
    background-color: transparent;
    transition: 280ms background-color ease-in-out;
    border-radius: 2px;

    :hover {
      background-color: var(--color-secondary);
      color: var(--color-background);
      transition: 280ms background-color ease-in-out;
    }
    :active {
      transform: scale(0.9);
      transition: 280ms background-color ease-in-out;
    }
  }

  .active {
    background-color: var(--color-primary);
    color: var(--color-background);
    transition: 280ms background-color ease-in-out;
  }

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Nav = ({t}) => {
  return (
    <Navigation>
      <Link to="/" getProps={isActive}>
        {t("map.label")}
      </Link>
      <Link to="contagios-provincia" getProps={isActive}>
        {t("region.label")}
      </Link>
      <Link to="contagios" getProps={isActive}>
        {t("day.label")}
      </Link>
      <Link to="detalles" getProps={isActive}>
        {t("detail.label")}
      </Link>
    </Navigation>
  );
};

export default withTranslation()(Nav)
