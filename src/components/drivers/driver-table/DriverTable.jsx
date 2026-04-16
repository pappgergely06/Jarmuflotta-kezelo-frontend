import { Table } from "@chakra-ui/react";
import { useState } from "react";

function DriverTable() {

    const [drivers, setDrivers] = useState([])

    return (
        <Table.ScrollArea color={"black"} borderWidth="1px" borderRadius="md" h="80%" w={"100%"}>
              <Table.Root size="md" stickyHeader interactive striped>
                <Table.Header bg="gray.200">
                  <Table.Row>
                    <Table.ColumnHeader>Név</Table.ColumnHeader>
                    <Table.ColumnHeader>Autó(k)</Table.ColumnHeader>
                    <Table.ColumnHeader>Jogosítvány száma</Table.ColumnHeader>
                    <Table.ColumnHeader>Telefonszám</Table.ColumnHeader>
                    <Table.ColumnHeader>Email</Table.ColumnHeader>
                    <Table.ColumnHeader>Lakcím</Table.ColumnHeader>
                    <Table.ColumnHeader>Kezdés dátum</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
        
                <Table.Body>
                  {drivers.map((driver) => (
                    <Table.Row
                      key={driver.id}
                    >
                      <Table.Cell>{}</Table.Cell>
                      <Table.Cell>{}</Table.Cell>
                      <Table.Cell>{}</Table.Cell>
                      <Table.Cell>{}</Table.Cell>
                      <Table.Cell>{}</Table.Cell>
                      <Table.Cell>{}</Table.Cell>
                      <Table.Cell>{}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Table.ScrollArea>
    );
}

export default DriverTable;