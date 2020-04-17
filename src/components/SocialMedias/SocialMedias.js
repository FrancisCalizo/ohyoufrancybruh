import './SocialMedias.css';

import React from 'react';

const SocialMedias = () => {
  return (
    <div>
      <ul className="social-bar">
        <li>
          <a href="https://franciscalizo.com" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fcalizo/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/FrancisCalizo" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href="https://instagram.com/ohyoufrancybruh" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedias;
