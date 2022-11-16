import React from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import './css/style.css';

import Card from './components/Card/Card';

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('#d0cdbb', '#181923')(props),
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Card />
      </Box>
    </ChakraProvider>
    // <ChakraProvider theme={theme}>
    //   <Box textAlign="center" fontSize="xl">
    //     <Grid minH="100vh" p={3}>
    //       <ColorModeSwitcher justifySelf="flex-end" />
    //       <VStack spacing={8}>
    //         <Logo h="40vmin" pointerEvents="none" />
    //         <Text>
    //           Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
    //         </Text>
    //         <Link
    //           color="teal.500"
    //           href="https://chakra-ui.com"
    //           fontSize="2xl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn Chakra
    //         </Link>
    //       </VStack>
    //     </Grid>
    //   </Box>
    // </ChakraProvider>
  );
}

export default App;
