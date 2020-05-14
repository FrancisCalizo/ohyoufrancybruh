import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { scale } from 'utils/typography';

/**
 * base MUST include slash (eg: en/)
 *
 * @param {*object} { location, title, base}
 */
function Header({ location, title, base }) {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}${base}`;

  if (location.pathname === rootPath) {
    return (
      <h1
        className="main-title"
        style={{
          // ...scale(0.8),
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'var(--textTitle)',
          }}
          to={base}
        >
          {title}
        </Link>
      </h1>
    );
  }
  return (
    <h3
      style={{
        fontFamily: 'Merriweather, Georgia, serif',
        // fontFamily:
        //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        marginTop: 0,
        marginBottom: 0,
        height: 42,
        lineHeight: '2.625rem',
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={base}
      >
        {title}
      </Link>
    </h3>
  );
}

Header.propTypes = {
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string,
  base: PropTypes.string,
};

Header.defaultProps = {
  title: null,
  base: '',
};

export default Header;
