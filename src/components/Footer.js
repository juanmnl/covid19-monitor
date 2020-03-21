import React from 'react';
import { ShowWindowDimensions } from '../hooks/useWindowSize';

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <footer>
      <ShowWindowDimensions /> <br />
      <a href="https://www.twitter.com/_juanmnl">&copy;{year} - juanmnl</a>
    </footer>
  );
}
