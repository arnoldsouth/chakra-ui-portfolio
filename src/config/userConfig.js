import React from 'react';

import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

const userConfig = {
  author: {
    name: 'arnold southammavong',
    devType: 'full stack developer',
    bio: 'cpa accountant turned full stack web developer living in the bay area',
    socials: [
      {
        url: 'https://www.github.com/arnoldsouth',
        label: 'github',
        type: 'grey',
        icon: <SiGithub />,
      },
      {
        url: 'https://www.linkedin.com/in/arnoldsouth',
        label: 'linkedin',
        type: 'grey',
        icon: <SiLinkedin />,
      },
      {
        url: 'https://twitter.com/ajaxrip',
        label: 'twitter',
        type: 'grey',
        icon: <SiTwitter />,
      },
    ],
    skills: [
      {
        name: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        label: 'javascript',
        type: 'grey',
        icon: <SiJavascript />,
      },
      {
        name: 'typescript',
        link: 'https://www.typescriptlang.org/',
        label: 'typescript',
        type: 'grey',
        icon: <SiTypescript />,
      },
      {
        name: 'reactjs',
        link: 'https://www.typescriptlang.org/',
        label: 'reactjs',
        type: 'grey',
        icon: <SiReact />,
      },
      {
        name: 'mongodb',
        link: 'https://www.mongodb.com/',
        label: 'mongodb',
        type: 'grey',
        icon: <SiMongodb />,
      },
      {
        name: 'postgres',
        link: 'https://www.postgresql.org/',
        label: 'postgres',
        type: 'grey',
        icon: <SiPostgresql />,
      },
    ],
  },
  copyright: `Copyright © ${new Date().getFullYear()} arnold southammavong`,
};

export default userConfig;
