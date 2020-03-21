import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : {};
};

const Navigation = styled.nav`
  background-color: hsla(164, 23%, 10%, 1);
  margin: 0.5rem 0;
  padding: 0.2rem 0.3rem;
  border-radius: 2px;
  text-align: right;

  > a {
    display: inline-block;
    font-weight: bolder;
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
    line-height: 1.6rem;
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
`;

export default function Nav() {
  return (
    <Navigation>
      <Link to="/" getProps={isActive}>
        Mapa
      </Link>
      <Link to="contagios-provincia" getProps={isActive}>
        X Provincia
      </Link>
      <Link to="contagios" getProps={isActive}>
        X Día
      </Link>
      <Link to="detalles" getProps={isActive}>
        Detalle
      </Link>
    </Navigation>
  );
}
