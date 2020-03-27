import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    margin: 3px;
    border: 3px solid var(--color-primary);
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--color-primary) transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

const Spinner = () => (
  <SpinnerContainer>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </SpinnerContainer>
)

export default Spinner
