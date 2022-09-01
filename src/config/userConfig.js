import React from 'react';

import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaReact,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

const userConfig = {
  author: {
    name: 'arnold southammavong',
    devType: 'full stack developer',
    bio: "i'm a cpa accountant turned full stack developer currently living in the bay area",
    socials: [
      {
        url: 'https://www.github.com/arnoldsouth',
        label: 'github',
        // type: 'gray',
        icon: <FaGithubSquare />,
      },
      {
        url: 'https://www.linkedin.com/in/arnoldsouth',
        label: 'linkedin',
        // type: 'gray',
        icon: <FaLinkedin />,
      },
      {
        url: 'https://twitter.com/ajaxrip',
        label: 'twitter',
        // type: 'gray',
        icon: <FaTwitterSquare />,
      },
    ],
    skills: [
      {
        name: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        image: <SiJavascript />,
      },
      {
        name: 'typescript',
        link: 'https://www.typescriptlang.org/',
        image: <SiTypescript />,
      },
      {
        name: 'reactjs',
        link: 'https://www.typescriptlang.org/',
        image: <FaReact />,
      },
      {
        name: 'mongodb',
        description: 'database',
        link: 'https://www.mongodb.com/',
        type: 'database',
        image: <SiMongodb />,
      },
      {
        name: 'postgres',
        description: 'database',
        link: 'https://www.postgresql.org/',
        type: 'database',
        image: <SiPostgresql />,
      },
    ],
  },
  copyright: `Copyright © ${new Date().getFullYear()} arnold southammavong`,
};

export default userConfig;
