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
    Stack,
    Switch,
    Button
  } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminOrderList() {

    const [data, setData] = useState([
        {
            name: "",
            phone: "",
            price: 0
        }
    ])

    const [isHit, setIsHit] = useState(false)

    const fetchData = async () => {
        console.log('running...')
        let res = await axios.get("http://localhost:4000/api/v1/joki/admin-list-order")
        console.log(res.data, "data")
        if (res.status == 200) {
            setData(res.data.data)
        }

    }
    useEffect(() => {
        fetchData()
    }, [isHit])

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

    const updateApproval = async (e, id) => {
        if (id != "") {
            await axios.put("http://localhost:4000/api/v1/joki/change-approval/" + id, {
                approved: e.target.checked
            })
            fetchData()
        }
    }

    const updateStatus = async (e, id) => {
        if (id != "") {
            await axios.put("http://localhost:4000/api/v1/joki/change-status/" + id, {
                status: e.target.checked
            })

            // // jika status orderan dirubah menjadi selesai, maka approval otomatis true
            // if (e.target.checked != true) {
            //     await axios.put("http://localhost:4000/api/v1/joki/change-approval/" + id, {
            //         approved: true
            //     })
            // } 
            fetchData()
        }
    }

    const deleteOrder = async (e, id) => {
        console.log("masuk", id)
        await axios.delete(`http://localhost:4000/api/v1/joki/${id}`)
        fetchData()
    }

    return (
        <Stack>
            
        <TableContainer>
        <Table variant='striped' colorScheme='gray' o>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Order Type</Th>
              <Th>Target (Rank/Win)</Th>
              <Th isNumeric>Price</Th>
              <Th>Approval</Th>
              <Th>Action Approve</Th>
              <Th>Status</Th>
              <Th>Action Status</Th>
              <Th>Action Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
          {
              data.length > 0 ? 
              data.map((d,i) => {
                return <Tr key={i}>
                <Td>{++i}</Td>
                <Td>{d.name}</Td>
                <Td>{d.phone}</Td>
                <Td>{d.order_type}</Td>
                <Td>{d.order_type == "rank" ? targetRank(d.target_rank) : d.target_win}</Td>
                <Td isNumeric>{d.price}</Td>
                <Td>{d.approved ? <Badge colorScheme={'green'}>Diterima</Badge> : <Badge colorScheme={'red'}>Ditolak</Badge>}</Td>
                <Td><Switch isChecked={d.approved} onChange={(e) => updateApproval(e, d._id)}/></Td> 
                <Td>{d.status ? <Badge colorScheme={'green'}>Order Selesai</Badge> : <Badge colorScheme={'yellow'}>Sedang Dalam Pengerjaan</Badge>}</Td>
                <Td><Switch isChecked={d.status} onChange={(e) => updateStatus(e, d._id)}/></Td> 
                <Td><Button colorScheme="red" onClick={(e) => deleteOrder(e, d._id)}>Hapus</Button> </Td> 
                
            </Tr>
              })
              : "no data order yet"
          }
          </Tbody>
        </Table>
      </TableContainer>
      </Stack>
    );
  }