import React from 'react';
import {
  Box,
  Link,
  VStack,
  Image,
  Text,
  Skeleton,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import { usePalette } from 'react-palette';
import { item } from '../CardAnimation';
import PropTypes from 'prop-types';
import userConfig from '../../../config/userConfig';

// export interface SkillsProps {
//   name: string;
//   icon: string;
//   link: string;
// }

const iconProps = {
  size: 'lg',
  variant: 'ghost',
};

const Skills = ({ name, image, link }) => {
  //   const { data, loading, error } = usePalette(image);

  return (
    <motion.div variants={item}>
      <motion.div whileHover={{ y: -3 }}>
        <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
          <VStack
            p={2}
            bg={useColorModeValue('white', 'gray.800')}
            rounded="xl"
            borderWidth="1px"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
            w="100%"
            textAlign="left"
            align="center"
            spacing={2}
            _hover={{ shadow: 'md' }}
          >
            <Box
              rounded="lg"
              p={2}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              rounded="lg"
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Box
                // bg={data.lightVibrant}
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                opacity={0.25}
              ></Box>
              {/* {loading ? ( */}
              (
              <Skeleton height={26} width={26} rounded="md" />) : (
              {/* <Image
                src={userConfig.author.skills.icon}
                height={26}
                width={26}
                layout="fixed"
                rounded="md"
              /> */}
              {userConfig.author.skills.map((skills, index) => (
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
              ))}
              )
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

export default Skills;

Skills.propTypes = {
  name: PropTypes.string,
  //   icon: PropTypes.object,
  icon: PropTypes.any.isRequired,
  link: PropTypes.string,
};
