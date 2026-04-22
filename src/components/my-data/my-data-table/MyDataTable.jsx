import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { fetchDriverById } from "../../../utils/api";
import Cookies from "js-cookie";
import DateFormatter from "../../ui/date-formatter/DateFormatter";

function MyDataTable() {

    const { user } = useAuth()

    const [driver, setDriver] = useState({})

    useEffect(() => {
        fetchDriverById(Cookies.get("auth_token"), user.driver_id)
            .then((data) => setDriver(data))
            .catch((err) => console.error(err))
        
    }, [])


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
                    <Table.Cell>{driver.phone}</Table.Cell>
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
                    <Table.Cell>
                        <DateFormatter dateString={driver.starting_date}/>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    );
}

export default MyDataTable;