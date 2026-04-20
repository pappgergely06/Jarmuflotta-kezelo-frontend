import { Table } from "@chakra-ui/react";

function MyVehicleTable() {
    return (
        <Table.Root size="md" variant="line" color={"black"}>
            <Table.Body>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Rendszám</Table.Cell>
                    <Table.Cell>AAMF-342</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Alvázszám</Table.Cell>
                    <Table.Cell style={{ wordBreak: "break-all" }}>WVWZZZ23416772W0001</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Évjárat</Table.Cell>
                    <Table.Cell>2004</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Márka</Table.Cell>
                    <Table.Cell>Ford</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Típus</Table.Cell>
                    <Table.Cell>Focus</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Óraállás</Table.Cell>
                    <Table.Cell>261000km</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Kötelező biz.</Table.Cell>
                    <Table.Cell>2027-04-01</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Műszaki érv.</Table.Cell>
                    <Table.Cell>2028-05-17</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    );
}

export default MyVehicleTable;