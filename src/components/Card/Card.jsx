import React from 'react';
import { Box, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { RiArrowRightLine } from 'react-icons/ri';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { container } from './CardAnimation';
import About from './About/About';
import CardReverse from './CardReverse/CardReverse';

import '../../css/style.css';

const Card = () => {
  const bg = useColorModeValue('white', '#2f3244');
  const [type, setType] = React.useState('profile');

  return (
    <>
      <Box
        fontSize="xl"
        position="fixed"
        left={0}
        right={0}
        bottom={0}
        top={0}
        textAlign="center"
        height="max-content"
        width="max-content"
        margin="auto"
        className="card-swing"
      >
        <Box
          // maxH={'400px'}
          maxH={'450px'}
          minH={'354px'}
          w="345px"
          boxShadow={'lg'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          cursor="pointer"
          _hover={{ boxShadow: 'lg' }}
          bg={bg}
          role="group"
        >
          {type === 'profile' ? (
            <motion.div variants={container} initial="hidden" animate="visible">
              <About />
            </motion.div>
          ) : (
            <CardReverse />
          )}

          <HStack
            position={'absolute'}
            left={'-5px'}
            bottom={0}
            p={3}
            py={0.5}
            width={'100%'}
            justify={'flex-end'}
            className="arrow-swing"
          >
            <motion.div
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
            >
              <Icon
                as={type === 'profile' ? RiArrowRightLine : BiArrowBack}
                w={6}
                h={6}
                onClick={() =>
                  setType(type === 'profile' ? 'works' : 'profile')
                }
              />
            </motion.div>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Card;
