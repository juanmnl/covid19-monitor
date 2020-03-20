import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: hsla(163, 72%, 48%, 1.0);
    --color-secondary: hsla(50, 100%, 64%, 1.0);
    --color-warning: hsla(25, 100%, 67%, 1.0);
    --color-danger: hsla(0, 100%, 67%, 1.0);
    --color-background: hsla(164, 23%, 13%, 1.0);
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
    font-size: 18px;
    font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-primary);
    height: 100vh;
    width: 100vw;
  }

  h1 {
    font-size: 1.8rem;
    text-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.7), 0 -1px 0 hsla(0, 0%, 100%, 0.5);
    color: var(--color-secondary);
    font-weight: 900;
    text-transform: uppercase;

    > small {
      font-size: .7rem;
      font-weight: 400;
      letter-spacing: normal;
      text-shadow: none;
      color: var(--color-danger);
    }

    @media (max-width: 960px) {
      font-size: .8rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: var(--color-secondary);
    border-radius: 1px;
    line-height: 1.7rem;
    margin-bottom: .2rem;
    opacity: .8;
    @media (max-width: 960px) {
      font-size: 1rem;
    }
  }

  a {
    color: var(--color-primary);
  }

  hr {
    margin: 2rem 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      #0000000d,
      rgba(0, 0, 0, 0)
    );
  }

  main {
    width: 100vw;
    height: 100vh;
    display: flex;

    padding: .5rem;
    border: 4px solid var(--color-primary);

    @media(max-width: 960px) {
      padding: 0;
    }

    > section {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      border: 2px solid var(--color-primary);
      flex: 1;
      margin: .5rem;
      animation: turn-on .4s linear;
      animation-fill-mode: forwards;

      :first-of-type {
        overflow-y: scroll;
      }

      :last-of-type {
        padding: 0;
        overflow: hidden;
        
        > div {
          margin-top: 0;
          width: 100%;
          height: 100%;

        > * {
            margin-top: 0;
          }
        }
      }

      @media(max-width: 960px) {
        margin: 0;
      }

      > div {
        margin-top: 1rem;

      }
    }

    footer {
      padding-bottom: 2rem;
    }

    @media (max-width: 960px) {
     flex-direction: column;

     > section {
      :first-of-type {
        order: 1;
      }
     }
    }
  }

  @keyframes turn-on {
    0% {
      transform: scale(1, 0.8) translate3d(0, 0, 0);
      filter: brightness(30);
      opacity: 1;
    }
    3.5% {
      transform: scale(1, 0.8) translate3d(0, 100%, 0);
    }
    3.6% {
      transform: scale(1, 0.8) translate3d(0, -100%, 0);
      opacity: 1;
    }
    9% {
      transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
      filter: brightness(30);
      opacity: 0;
    }
    11% {
      transform: scale(1, 1) translate3d(0, 0, 0);
      filter: contrast(0) brightness(0);
      opacity: 0;
    }
    100% {
      transform: scale(1, 1) translate3d(0, 0, 0);
      filter: contrast(1) brightness(1.2) saturate(1.3);
      opacity: 1;
    }
  }
`;
