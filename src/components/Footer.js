import React from 'react';

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <footer>
      <a href="https://www.twitter.com/_juanmnl">&copy;{year} - juanmnl</a>
      <br />
      <a href="https://www.github.com/juanmnl/covid19-monitor">Me ayudas?</a>
    </footer>
  );
}
