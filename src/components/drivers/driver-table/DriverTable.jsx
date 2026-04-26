import { Center, Table, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchAssignmentByDriverId, fetchDrivers } from "../../../utils/api";
import Cookies from "js-cookie";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import { useRefresh } from "../../../contexts/refresh/RefreshContext";
import useSelectedVehicle from "../../../hooks/useSelectedVehicle";

function DriverTable({ onSelect, selectedId }) {
    const { triggers } = useRefresh();
    const { setSelectedVehicle } = useSelectedVehicle()
    const [drivers, setDrivers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchDrivers(Cookies.get("auth_token"))
            .then((data) => {
                setDrivers(data || []);
            })
            .catch((error) => {
                console.error("Hiba a sofőrök lekérésekor:", error);
            })
            .finally(() => setIsLoading(false));
    }, [triggers.drivers]);

    useEffect(() => {
        fetchAssignmentByDriverId(Cookies.get("auth_token"), selectedId)
            .then((data) => setSelectedVehicle(data.vehicle_id))
            .catch((error) => {
                console.error("Hiba:", error);
            })
    }, [selectedId])

    return (
        <Table.ScrollArea color="black" borderWidth="1px" borderRadius="md" h="80%" w="100%">
            <Table.Root size="md" stickyHeader interactive>
                <Table.Header bg="gray.200">
                    <Table.Row>
                        <Table.ColumnHeader fontWeight="bold">Név</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Jogosítvány</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Telefonszám</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Email</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Lakcím</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Kezdés dátum</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {isLoading ? (
                        <Table.Row>
                            <Table.Cell colSpan={7}>
                                <Center py={10}>
                                    <Spinner color="blue.500" />
                                </Center>
                            </Table.Cell>
                        </Table.Row>
                    ) : drivers.length === 0 ? (
                        <Table.Row>
                            <Table.Cell colSpan={7}>
                                <Center py={10}>
                                    <Text color="gray.500">Nincsenek megjeleníthető sofőrök!</Text>
                                </Center>
                            </Table.Cell>
                        </Table.Row>
                    ) : (
                       drivers.map((driver) => {
                            const isSelected = selectedId === driver.driver_id;

                            return (
                                <Table.Row
                                    key={driver.driver_id}
                                    onClick={() => onSelect(isSelected ? null : driver.driver_id)}
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
                                    <Table.Cell fontWeight="medium">{driver.name}</Table.Cell>
                                    <Table.Cell>{driver.license_number}</Table.Cell>
                                    <Table.Cell>{driver.phone}</Table.Cell>
                                    <Table.Cell>{driver.email}</Table.Cell>
                                    <Table.Cell>{driver.address}</Table.Cell>
                                    <Table.Cell>
                                        <DateFormatter dateString={driver.starting_date} />
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

export default DriverTable;