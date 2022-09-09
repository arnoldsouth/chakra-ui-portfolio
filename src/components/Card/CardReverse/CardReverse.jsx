import React from 'react';

import { IconButton, Link, SimpleGrid, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { container } from '../CardAnimation';
import userConfig from '../../../config/userConfig';
import Skills from '../Skills/Skills';

const iconProps = {
  size: 'lg',
  variant: 'ghost',
};

const CardReverse = ({}) => {
  return (
    <SlideFade in>
      <motion.div variants={container} initial="hidden" animate="visible">
        <SimpleGrid columns={3} spacing={3}>
          {/* {userConfig.author.skills.map((tool, index) => (
            <Skills
              key={index}
              name={tool.name}
              icon={tool.icon}
              //   platform={'web'}
              link={tool.link}
            />
          ))} */}

          {/* {userConfig.author.skills.map((skills, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={skills.url}
              aria-label={skills.label}
              // size="lg"
              colorScheme={skills.type}
              icon={skills.icon}
              {...iconProps}
            />
          ))} */}
        </SimpleGrid>
      </motion.div>
    </SlideFade>
  );
};

export default CardReverse;
