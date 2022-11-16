import React from 'react';
import {
  Box,
  Link,
  VStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { item } from '../CardAnimation';
import PropTypes from 'prop-types';

// export interface WorksProps {
//   name: string;
//   icon: string;
//   link: string;
// }

const Works = ({ name, link, image }) => {
  return (
    <motion.div variants={item}>
      <motion.div whileHover={{ y: -3 }}>
        <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
          <VStack
            p={2}
            bg={useColorModeValue('gray.300', 'gray.800')}
            rounded="xl"
            borderWidth="1px"
            borderColor={useColorModeValue('gray.300', '#181923')}
            w="100%"
            // h="100%"
            textAlign="left"
            align="center"
            spacing={2}
            _hover={{ shadow: 'md' }}
          >
            <Box
              rounded="lg"
              p={1}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Image
                src={image}
                height={'30'}
                width={'30'}
                // layout="fixed"
                rounded="md"
              />
            </Box>
            <VStack
              align="start"
              justify="flex-start"
              spacing={1}
              maxW="lg"
              h="100%"
            >
              <VStack spacing={0} align="center" flexGrow="1">
                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                  {name}
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Works;

Works.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  //   icon: PropTypes.object,
  image: PropTypes.string,
  link: PropTypes.string,
};
