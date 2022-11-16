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

import neuraltheft from '../assets/neuraltheft.jpeg';
import helpmecook from '../assets/helpmecook.jpeg';
import sneakerpuffery from '../assets/sneakerpuffery.jpeg';

const userConfig = {
  author: {
    name: 'arnold southammavong',
    devType: 'full stack developer',
    bio: 'accountant turned full stack web developer living in the bay area',
    socials: [
      {
        url: 'https://www.github.com/arnoldsouth',
        label: 'github',
        type: 'gray',
        icon: <SiGithub />,
      },
      {
        url: 'https://www.linkedin.com/in/arnoldsouth',
        label: 'linkedin',
        type: 'gray',
        icon: <SiLinkedin />,
      },
      {
        url: 'https://twitter.com/arnold_rip',
        label: 'twitter',
        type: 'gray',
        icon: <SiTwitter />,
      },
    ],
    skills: [
      {
        name: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        label: 'javascript',
        type: 'gray',
        icon: <SiJavascript />,
      },
      {
        name: 'typescript',
        link: 'https://www.typescriptlang.org/',
        label: 'typescript',
        type: 'gray',
        icon: <SiTypescript />,
      },
      {
        name: 'reactjs',
        link: 'https://www.reactjs.org/',
        label: 'reactjs',
        type: 'gray',
        icon: <SiReact />,
      },
      {
        name: 'mongodb',
        link: 'https://www.mongodb.com/',
        label: 'mongodb',
        type: 'gray',
        icon: <SiMongodb />,
      },
      {
        name: 'postgres',
        link: 'https://www.postgresql.org/',
        label: 'postgres',
        type: 'gray',
        icon: <SiPostgresql />,
      },
    ],
    works: [
      {
        name: 'chowstagram',
        link: 'https://chowstagram.netlify.app/',
        description:
          'a simple photo sharing web app for lovers of dogs and food',
        // TODO:
        image: sneakerpuffery,
      },
      {
        name: 'neuralTHEFT',
        link: 'https://neuraltheft.netlify.app/',
        description: "a stat tracking app for riot games' gamers",
        image: neuraltheft,
      },
      {
        name: 'helpmeCOOK',
        link: 'https://helpmecook.netlify.app/',
        description: 'a recipe finder for cookers, bakers, and eaters',
        // TODO:
        image: helpmecook,
      },
    ],
  },
  copyright: `Copyright © ${new Date().getFullYear()} arnold southammavong`,
};

export default userConfig;
