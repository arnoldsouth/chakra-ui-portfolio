import React from 'react';

import { SimpleGrid, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { container } from '../CardAnimation';
import userConfig from '../../../config/userConfig';
import Skills from '../Skills/Skills';

const CardReverse = ({}) => {
  return (
    <SlideFade in>
      <motion.div variants={container} initial="hidden" animate="visible">
        <SimpleGrid columns={3} spacing={3}>
          {userConfig.author.skills.map((tool, index) => (
            <Skills
              key={index}
              name={tool.name}
              image={tool.image}
              //   platform={'web'}
              link={tool.link}
            />
          ))}
        </SimpleGrid>
      </motion.div>
    </SlideFade>
  );
};

export default CardReverse;
