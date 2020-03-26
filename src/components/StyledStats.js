import styled from 'styled-components';

export const StatGrid = styled.section`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const StatBlock = styled.article`
  display: flex;
  flex: 1;
  color: var(--color-primary);
  flex-direction: column;
  padding: 0.6rem 0.8rem;
  box-shadow: 0 1px 1px hsla(163, 72%, 0%, 0.7), 0 -1px 0 var(--color-black);
  border: 1px solid var(--color-black);
  border-radius: 2px;
  transition: box-shadow 150ms ease-in;
  text-align: right;
  transition: all 200ms ease-out;
  margin: 0.3rem;

  :nth-of-type(1) {
    color: var(--color-warning);
  }

  :nth-of-type(2) {
    color: var(--color-danger);
  }

  :nth-of-type(6) {
    color: var(--color-secondary);
  }

  :nth-of-type(7) {
    color: var(--color-secondary);
  }

  > h3 {
    font-size: 0.6rem;
    text-transform: uppercase;
    margin: 0;
    font-weight: 300;
    display: inline-block;
  }

  > p {
    font-size: 1.4rem;
    flex: 2;
    font-weight: 900;
  }

  :hover {
    border-color: var(--color-primary);
    transition: all 300ms ease-in;

    :nth-of-type(1) {
      border-color: var(--color-warning);
    }

    :nth-of-type(2) {
      border-color: var(--color-danger);
    }
  }

  @media (max-width: 960px) {
    margin: 0.5rem 0rem;
    text-align: center;
  }
`;

export const Separator = styled.div`
  border-top: 1px dotted var(--color-primary-5);
  height: 1px;
  width: 100%;
  margin: 0 1rem;
  flex: 4;
`;

export const Row = styled.li`
  font-size: small;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-primary);

  :first-of-type {
    color: var(--color-danger);
  }
  :nth-of-type(2) {
    color: var(--color-warning);
  }
  :nth-of-type(3),
  :nth-of-type(4) {
    color: var(--color-yellow);
  }
  @media (max-width: 960px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  span {
    display: inline-block;
    :last-of-type {
      font-weight: 900;
    }
  }
`;

export const TwoCols = styled.ol`
  font-size: 1.4rem;
  padding-left: 0;
  columns: 2;
  margin-bottom: 1.4rem;

  @media (max-width: 960px) {
    columns: 1;
  }
`;
