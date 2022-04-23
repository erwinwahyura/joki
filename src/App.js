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
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Lynch Gaming
              </Text>
              <br />{' '}
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Jasa Joki
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link href="/order/rank">
                <Button rounded={'full'} width="100%">Joki Rank</Button>
              </Link>
              <Link href="/order/classic">
                <Button rounded={'full'} width="100%">Joki Classic</Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
         <Image
            alt={'Login Image'}
            objectFit={'cover'}
            justifyContent={'center'}
            alignSelf={'center'}
            src={Logo}
          />
        </Flex>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
