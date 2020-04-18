import React from 'react';

import { rhythm } from 'utils/typography';

function Footer() {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        textAlign: 'center',
      }}
    >
      <p>
        ©2019 Francis Calizo | Made with{' '}
        <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>
      </p>
    </footer>
  );
}

export default Footer;
