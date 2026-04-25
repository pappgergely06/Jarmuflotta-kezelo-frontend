import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import { fetchTravelDocsByVehicleId } from "../../../utils/api";
import Cookies from "js-cookie"
import useAuth from "../../../hooks/useAuth";
import useSelectedVehicle from "../../../hooks/useSelectedVehicle";
import { useRefresh } from "../../../contexts/refresh/RefreshContext";

function TravelDocsTable() {

    const { triggers } = useRefresh()
    const { user } = useAuth()
    const { selectedVehicle } = useSelectedVehicle()

    const vehicle_id = user.role === "admin" ? selectedVehicle : user.driver_vehicle_id

    const [travelDocs, setTravelDocs] = useState([]);

    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        fetchTravelDocsByVehicleId(Cookies.get("auth_token"), vehicle_id)
            .then((data) => setTravelDocs(data))
            .catch((error) => console.error(error))
    }, [triggers.travelDocs])

    function calcDistance(start, end) {
        return end - start
    }
    return (
        <Table.ScrollArea color="black" height="60vh" w="100%">
            <Table.Root size="md" stickyHeader interactive>
                <Table.Header bg="gray.200">
                    <Table.Row>
                        <Table.ColumnHeader fontWeight={"bold"}>Dátum</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight={"bold"}>Induló km</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight={"bold"}>Záró km</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight={"bold"}>Megtett km</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {travelDocs.map((doc) => {
                        const isSelected = selectedId === doc.log_id

                        return (
                            <Table.Row
                                key={doc.log_id}
                                onClick={() => setSelectedId(isSelected ? null : doc.log_id)}
                                cursor="pointer"
                                data-selected={isSelected ? "" : undefined}

                                _selected={{
                                    bg: "blue.100",
                                    _hover: { bg: "blue.200" },
                                    "& > td": {
                                        color: "blue.900",
                                        fontWeight: "bold"
                                    }
                                }}
                                _hover={{ bg: "gray.100" }}
                                transition="background 0.2s"
                            >
                                <Table.Cell>
                                    <DateFormatter dateString={doc.date} />
                                </Table.Cell>
                                <Table.Cell>{doc.start_km}km</Table.Cell>
                                <Table.Cell>{doc.end_km}km</Table.Cell>
                                <Table.Cell>{
                                    calcDistance(
                                        doc.start_km,
                                        doc.end_km
                                    )
                                }km</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    );
}

export default TravelDocsTable;