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

import '../../../css/style.css';

const iconProps = {
  size: 'lg',
  variant: 'ghost',
};

const About = () => {
  return (
    <div className="font-family">
      <VStack spacing={5}>
        <motion.div whileHover={{ y: -2, scale: 1.1 }}>
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
          fontSize={'2xl'}
          fontFamily={'.body'}
          textTransform="capitalize"
          noOfLines={2}
        >
          {userConfig.author.name}
        </Heading>

        <Text
          color={'gray'}
          fontSize="xl"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: 'none' }}
          display="block"
          className="small-caps"
        >
          {userConfig.author.devType}
          <br />
          {userConfig.author.skills.map((skills, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={skills.link}
              aria-label={skills.label}
              // size="lg"
              colorScheme={skills.type}
              icon={skills.icon}
              {...iconProps}
            />
          ))}
          <br />
        </Text>
        <Fade in>
          <Text
            color={'gray'}
            fontSize="xl"
            noOfLines={{ base: 3, md: 4 }}
            _groupHover={{ display: 'block' }}
            display="none"
            className="small-caps"
          >
            {userConfig.author.bio}
            <br />
            <br />
            <br />
          </Text>
        </Fade>

        <Divider />

        <br />
        <Flex alignItems="center" justify="center" w="100%">
          <Box textAlign="center">
            {userConfig.author.socials.map((socials, index) => (
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={socials.url}
                aria-label={socials.label}
                // size="lg"
                colorScheme={socials.type}
                icon={socials.icon}
                {...iconProps}
              />
            ))}
          </Box>
        </Flex>
      </VStack>
    </div>
  );
};

export default About;
