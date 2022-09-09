import React from 'react';

import { IconButton, Link, SimpleGrid, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { container } from '../CardAnimation';
import userConfig from '../../../config/userConfig';
import Works from '../Works/Works';

const iconProps = {
  size: 'lg',
  variant: 'ghost',
};

const CardReverse = () => {
  return (
    <SlideFade in>
      <motion.div variants={container} initial="hidden" animate="visible">
        <SimpleGrid columns={1} spacing={3}>
          {userConfig.author.works.map((tool, index) => (
            <Works
              key={index}
              name={tool.name}
              link={tool.link}
              description={tool.description}
              image={tool.image}
              // platform={'web'}
            />
          ))}
        </SimpleGrid>
      </motion.div>
    </SlideFade>
  );
};

export default CardReverse;
