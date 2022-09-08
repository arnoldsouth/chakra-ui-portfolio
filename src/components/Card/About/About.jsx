import React from 'react';
import {
  Avatar,
  Box,
  Heading,
  VStack,
  Text,
  Fade,
  Divider,
  Flex,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import userConfig from '../../../config/userConfig';
import Touka from '../../../assets/touka.png';

const iconProps = {
  size: 'lg',
  variant: 'ghost',
};

const About = ({}) => {
  return (
    <>
      <VStack spacing={5}>
        <motion.div whileHover={{ y: -5, scale: 1.1 }}>
          <Box
            boxShadow={'xl'}
            _hover={{ boxShadow: 'lg' }}
            borderRadius="full"
          >
            <Avatar
              _groupHover={{ width: '5rem', height: '5rem' }}
              size={'2xl'}
              src={Touka}
            />
          </Box>
        </motion.div>
        <Heading
          fontSize={'xl'}
          fontFamily={'body'}
          textTransform="capitalize"
          noOfLines={2}
        >
          {userConfig.author.name}
        </Heading>

        <Text
          color={'gray.500'}
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: 'none' }}
          display="block"
        >
          {userConfig.author.devType}
        </Text>

        <Fade in>
          <Text
            color={'gray.500'}
            fontSize="lg"
            noOfLines={{ base: 3, md: 4 }}
            _groupHover={{ display: 'block' }}
            display="none"
          >
            {userConfig.author.bio}
          </Text>
        </Fade>

        <Divider />

        <Flex alignItems="center" justify="center" w="100%">
          <Box textAlign="center">
            {userConfig.author.socials.map((sc, index) => (
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={sc.url}
                aria-label={sc.label}
                // size="lg"
                colorScheme={sc.type}
                icon={sc.icon}
                {...iconProps}
              />
            ))}
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default About;