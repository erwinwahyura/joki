import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Stack,
  Flex,
  Heading,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Logo from './assets/logo.jpeg';
import { Link as LinkRouter } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Flex flex={1} justifyContent={'center'} alignItems={'center'}>
         <Image
            alt={'Login Image'}
            objectFit={'cover'}
            justifyContent={'center'}
            alignSelf={'center'}
            src={Logo}
          />
        </Flex>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent={'center'} alignItems={'center'}>
        <Link href="/order/rank">
          <Button rounded={'full'} width="100%">Joki Rank</Button>
        </Link>
        <Link href="/order/classic">
          <Button rounded={'full'} width="100%">Joki Classic</Button>
        </Link>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
