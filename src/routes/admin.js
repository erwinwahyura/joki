import {
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg';
import { MdCall } from "react-icons/md"

export default function Admin() {

    const [data, setData] = useState([
        {
            name: "",
            phone: "",
            price: 0
        }
    ])

    useEffect(() => {
        async function fetchData() {
            let res = await axios.get("http://localhost:4000/api/v1/joki")
            console.log(res.data, "data")
            if (res.status == 200) {
                setData(res.data.data)
            }
        }
        fetchData()
    }, [])
    return (
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
                Admin Panel
              </Text>
              <br />{' '}
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Selamat Datang di Admin panel
            </Text>
          </Stack>
        </Flex>
      </Stack>
    );
  }