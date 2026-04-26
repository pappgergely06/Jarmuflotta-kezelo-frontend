import { Center, Table, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import { fetchTravelDocsByVehicleId } from "../../../utils/api";
import Cookies from "js-cookie";
import useAuth from "../../../hooks/useAuth";
import useSelectedVehicle from "../../../hooks/useSelectedVehicle";
import { useRefresh } from "../../../contexts/refresh/RefreshContext";

function TravelDocsTable() {
    const { triggers } = useRefresh();
    const { user } = useAuth();
    const { selectedVehicle } = useSelectedVehicle();

    const [travelDocs, setTravelDocs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);

    const vehicle_id = user.role === "admin" ? selectedVehicle : user.driver_vehicle_id;

    useEffect(() => {
        if (!vehicle_id) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        fetchTravelDocsByVehicleId(Cookies.get("auth_token"), vehicle_id)
            .then((data) => {
                setTravelDocs(data || []);
            })
            .catch((error) => {
                console.error("Hiba a menetlevelek lekérésekor:", error);
            })
            .finally(() => setIsLoading(false));
            
    }, [triggers.travelDocs, vehicle_id]);

    return (
        <Table.ScrollArea color="black" height="60vh" w="100%">
            <Table.Root size="md" stickyHeader interactive>
                <Table.Header bg="gray.200">
                    <Table.Row>
                        <Table.ColumnHeader fontWeight="bold">Dátum</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Induló km</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Záró km</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Megtett km</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {isLoading ? (
                        <Table.Row>
                            <Table.Cell colSpan={4}>
                                <Center py={10}>
                                    <Spinner color="blue.500" />
                                </Center>
                            </Table.Cell>
                        </Table.Row>
                    ) : travelDocs.length === 0 ? (
                        <Table.Row>
                            <Table.Cell colSpan={4}>
                                <Center py={10}>
                                    <Text color="gray.500">Nincs megjeleníthető menetlevél!</Text>
                                </Center>
                            </Table.Cell>
                        </Table.Row>
                    ) : (
                        travelDocs.map((doc) => {
                            const isSelected = selectedId === doc.log_id;
                            const distance = doc.end_km - doc.start_km;

                            return (
                                <Table.Row
                                    key={doc.log_id}
                                    onClick={() => setSelectedId(isSelected ? null : doc.log_id)}
                                    cursor="pointer"
                                    data-selected={isSelected ? "" : undefined}
                                    _selected={{
                                        bg: "blue.50",
                                        _hover: { bg: "blue.100" },
                                        "& > td": {
                                            color: "blue.800",
                                            fontWeight: "semibold"
                                        }
                                    }}
                                    _hover={{ bg: "gray.50" }}
                                    transition="background 0.2s"
                                >
                                    <Table.Cell>
                                        <DateFormatter dateString={doc.date} />
                                    </Table.Cell>
                                    <Table.Cell>{doc.start_km.toLocaleString()} km</Table.Cell>
                                    <Table.Cell>{doc.end_km.toLocaleString()} km</Table.Cell>
                                    <Table.Cell fontWeight="bold">
                                        {distance.toLocaleString()} km
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })
                    )}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    );
}

export default TravelDocsTable;