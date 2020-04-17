/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from 'utils/typography';
import './Bio.css';

function Bio() {
  return (
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <div className="bio">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                className="pic"
                style={{
                  marginRight: rhythm(1 / 2),
                }}
                imgStyle={{
                  borderRadius: '50%',
                }}
              />
              <div className="description">
                <p>
                  Written by{' '}
                  <a href="https://franciscalizo.com" target="_blank" rel="noopener noreferrer">
                    {author}
                  </a>
                  . A driven software developer situated in Fort Lauderdale, Florida. Passionate
                  about fitness, travel, and hiking. Other interests include pizza.{' '}
                  <i>Hawaiian pizza</i>.
                </p>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 90, height: 80, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
