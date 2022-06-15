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
    Badge,
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

    const targetRank = (number) => {
      switch (number) {
        case "1":
          return "Warrior"
        case "2":
          return "Elite"
        case "3":
          return "Master"
        case "4":
          return "Epic"
        case "5":
          return "Legend"
        case "6":
          return "Mythic"
        case "7":
          return "Mythic Glory"
        default:
          return "Warrior"
      }
    }


    return (
        <TableContainer>
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Order Type</Th>
              <Th>Target (Rank/Win)</Th>
              <Th isNumeric>Price</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
          {
              data.length > 0 ? 
              data.map((d,i) => {
                return <Tr key={d._id}>
                <Td>{++i}</Td>
                <Td>{d.name}</Td>
                <Td>{d.phone}</Td>
                <Td>{d.order_type}</Td>
                <Td>{d.order_type == "rank" ? targetRank(d.target_rank) : d.target_win}</Td>
                <Td isNumeric>{d.price}</Td>
                <Td>{d.status ? <Badge colorScheme={'green'}>Order Selesai</Badge> : <Badge colorScheme={'yellow'}>Sedang Dalam Pengerjaan</Badge>}</Td>
            </Tr>
              })
              : "no data order yet"
          }
          </Tbody>
        </Table>
      </TableContainer>
    );
  }