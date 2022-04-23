import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyOrder() {

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
        <TableContainer>
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
          {
              data.length > 0 ? 
              data.map(d => {
                return <Tr key={d._id}>
                <Td>{d.name}</Td>
                <Td>{d.phone}</Td>
                <Td isNumeric>{d.price}</Td>
            </Tr>
              })
              : "no data order yet"
          }
          </Tbody>
        </Table>
      </TableContainer>
    );
  }