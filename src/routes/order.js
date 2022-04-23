import { useParams } from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select,
    Alert,
    AlertIcon,
    AlertTitle
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from "axios";

export default function Order() {
    let params = useParams()
    const [showPassword, setShowPassword] = useState(false);
    const [typeJoki, setTypeJoki] = useState("")

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [win, setWin] = useState(0)
    const [price, setPrice] = useState(0)
    const [currRank, setCurrRank] = useState(0)
    const [targetRank, setTargetRank] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(() => {
        let calculatedPrice = win * 1000
        return setPrice(calculatedPrice)
    }, [win])

    const orderNow = async () => {
        setIsLoading(true)
        console.log(name, phone, win, price)

        setTimeout( async () => {
            let dataObj = {
                name: name,
                phone: phone,
                price: price
            }
    
            if (params.type == "rank") {
                dataObj.current_rank = currRank
                dataObj.target_rank = targetRank
                dataObj.order_type = "rank"
            }
            if (params.type == "classic") {
                dataObj.order_type = "classic"
                dataObj.target_win = win
            }
    
            let res = await axios.post("http://localhost:4000/api/v1/joki/create", {
               ...dataObj
            })
            console.log(res.status, " gimana?")
            if (res.status == 200) {
                <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
              >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                  Order Success!
                </AlertTitle>
              </Alert>

                window.open(`https://wa.me/6282242361317?text='order dengan nama ${name}, silahkan masukan id game: \n masukan password game: \n Terimakasih Lynch Gaming'`)
            }
        }, 1000);

        setIsLoading(false)
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        width={"100%"}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width="100%">
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Order Joki {params.type}
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to boost your ranked with us
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" onChange={(e) => setName(e.target.value)}/>
              </FormControl>
              <FormControl id="name" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input type="text" onChange={(e) => setPhone(e.target.value)} />
              </FormControl>
              {
                  params.type == "rank" ? 
                  <> 
                    <FormControl id="currentrank" isRequired>
                        <FormLabel>Current Rank</FormLabel>
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                    <FormControl id="targetrank" isRequired>
                        <FormLabel>Target Rank</FormLabel>
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                  </> : 
                  <>
                    <FormControl id="tagetwin" isRequired>
                        <FormLabel>Total Win</FormLabel>
                        <Input type="text" onChange={(e) => setWin(e.target.value)} />
                    </FormControl>
                  </>
              }
              <FormControl id="price" isRequired>
                <FormLabel>Price</FormLabel>
                <Input type="text" readOnly placeholder="1.000.000" value={Intl.NumberFormat("id-ID").format(price)} />
              </FormControl>
             
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={orderNow}
                  isLoading={isLoading}
                >
                  Order Now
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }