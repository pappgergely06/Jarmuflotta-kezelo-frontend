import { Table } from "@chakra-ui/react";
import { useState } from "react";

function MyDataTable() {

    const [driver, setDriver] = useState(
        {
            "id": 3,
            "name": "Horváth Tamás",
            "car": "Skoda Octavia (LL-DD-789)",
            "license_number": "EF345678",
            "phone_number": "+36 70 555 1234",
            "email": "t.horvath@cegnev.hu",
            "address": "6720 Szeged, Tisza Lajos krt. 18.",
            "start_date": "2021-11-20"
        },
    )

    return (
        <Table.Root size="md" variant="line" color={"black"}>
            <Table.Body>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Név</Table.Cell>
                    <Table.Cell>{driver.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Jogosítvány száma</Table.Cell>
                    <Table.Cell style={{ wordBreak: "break-all" }}>{driver.license_number}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Telefonszám</Table.Cell>
                    <Table.Cell>{driver.phone_number}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Email</Table.Cell>
                    <Table.Cell>{driver.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Lakcím</Table.Cell>
                    <Table.Cell>{driver.address}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Kezdés dátum</Table.Cell>
                    <Table.Cell>{driver.start_date}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    );
}

export default MyDataTable;