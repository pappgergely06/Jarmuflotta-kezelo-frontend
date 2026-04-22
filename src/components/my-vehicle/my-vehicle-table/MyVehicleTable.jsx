import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { fetchVehicleById } from "../../../utils/api";
import Cookies from "js-cookie";
import DateFormatter from "../../ui/date-formatter/DateFormatter";

function MyVehicleTable() {

    const { user } = useAuth()

    const [myVehicle, setMyVehicle] = useState({})

    useEffect(() => {
        fetchVehicleById(Cookies.get("auth_token"), user.driver_vehicle_id)
            .then((data) => setMyVehicle(data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <Table.Root size="md" variant="line" color={"black"}>
            <Table.Body>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Rendszám</Table.Cell>
                    <Table.Cell>{myVehicle.lisence_plate}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Alvázszám</Table.Cell>
                    <Table.Cell style={{ wordBreak: "break-all" }}>{myVehicle.vin}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Évjárat</Table.Cell>
                    <Table.Cell>{myVehicle.year}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Márka</Table.Cell>
                    <Table.Cell>{myVehicle.brand}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Típus</Table.Cell>
                    <Table.Cell>{myVehicle.model}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Óraállás</Table.Cell>
                    <Table.Cell>{myVehicle.start_odometer} km</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Kötelező biz.</Table.Cell>
                    <Table.Cell>
                        <DateFormatter dateString={myVehicle.insurance_expiry}/>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell fontWeight={"bold"}>Műszaki érv.</Table.Cell>
                    <Table.Cell>
                        <DateFormatter dateString={myVehicle.next_technical_exam}/>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    );
}

export default MyVehicleTable;