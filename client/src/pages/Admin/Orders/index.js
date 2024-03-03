import {Table, Tbody, Tr, Th, Td, TableCaption, Text, Thead} from "@chakra-ui/react";

import {useQuery} from "@tanstack/react-query";
import {fetchOrders} from "../../../api";

function Orders() {

    const { isPending, error, data } = useQuery({
        queryKey: ['admin:orders'],
        queryFn: () => fetchOrders(),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    console.log(data);

    return (
        <div>
            <Text fontSize="2xl" p={5}>Orders</Text>

            <Table variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Address</Th>
                        <Th isNumeric={true}>Items</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map((item) => (
                            <Tr key={item._id}>
                                <Td>{item.user.email}</Td>
                                <Td>{item.adress}</Td>
                                <Td isNumeric={true}>{item.items.length}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>

        </div>
    )
}

export default Orders