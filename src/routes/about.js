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
import logo from '../assets/logo.jpeg';
import { MdCall } from "react-icons/md"

export default function About() {
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
                Lynch Gaming
              </Text>
              <br />{' '}
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Lynch Gaming merupakan seorang penjoki atau jasa menaikan tier
yang sudah cukup lama menjalankan jasa joki game Mobile Legends dan memiliki
pelanggan yang cukup banyak. Lynch Gaming sangat ingin mengembangkan
usahanya lebih besar lagi dengan bisa mencakup lebih banyak pelanggan dari
berbagai daerah, Maka dari itu didirikannya website ini di tahun 2022.
            </Text>
            <Stack direction={{ base: 'column' }} spacing={4}>
              <Button rightIcon={<MdCall />} 
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                    <Link 
                        href='https://wa.me/6282242361317?text="Ingin Tahu Lebih detail menegnai joki Mobile Legend"'
                        target="_blank"
                    >
                        Contact Me On WhatsApp
                    </Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
         <Image
            alt={'Login Image'}
            objectFit={'cover'}
            justifyContent={'center'}
            alignSelf={'center'}
            src={logo}
          />
        </Flex>
      </Stack>
    );
  }