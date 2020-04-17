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
        ©2019 {/* <a href="https://franciscalizo.com" target="_blank" rel="noopener noreferrer"> */}
        Francis Calizo
        {/* </a> */}
      </p>
    </footer>
  );
}

export default Footer;
