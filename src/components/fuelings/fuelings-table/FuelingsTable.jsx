import { Center, Table, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState, useMemo } from "react";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import { fetchFuelingsByVehicleId } from "../../../utils/api";
import Cookies from "js-cookie";
import useSelectedVehicle from "../../../hooks/useSelectedVehicle";
import useAuth from "../../../hooks/useAuth";
import { useRefresh } from "../../../contexts/refresh/RefreshContext";

function FuelingsTable() {
    const [isLoading, setIsLoading] = useState(true);
    const { triggers } = useRefresh();
    const { user } = useAuth();
    const { selectedVehicle } = useSelectedVehicle();
    
    const vehicle_id = user.role === "admin" ? selectedVehicle : user.driver_vehicle_id;

    const [fuelings, setFuelings] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        if (!vehicle_id) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        fetchFuelingsByVehicleId(Cookies.get("auth_token"), vehicle_id)
            .then((data) => setFuelings(data || []))
            .catch((error) => console.error("Fueling fetch error:", error))
            .finally(() => setIsLoading(false));
            
    }, [triggers.fuelings, vehicle_id]);

    const formatHUF = (val) => new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(val);

    return (
        <Table.ScrollArea color="black" height="60vh" w="100%">
            <Table.Root size="md" stickyHeader interactive>
                <Table.Header bg="gray.200">
                    <Table.Row>
                        <Table.ColumnHeader fontWeight="bold">Dátum</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Tankolt Liter</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Literenkénti ár</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Fizetett összeg</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {isLoading ? (
                        <Table.Row>
                            <Table.Cell colSpan={4}>
                                <Center py={10}><Spinner /></Center>
                            </Table.Cell>
                        </Table.Row>
                    ) : fuelings.length === 0 ? (
                        <Table.Row>
                            <Table.Cell colSpan={4}>
                                <Center py={10}>
                                    <Text color="gray.500">Nincs megjeleníthető menetlevél!</Text>
                                </Center>
                            </Table.Cell>
                        </Table.Row>
                    ) : (
                        fuelings.map((fueling) => {
                            const isSelected = selectedId === fueling.fueling_id;
                            const totalPrice = Math.round(fueling.price_per_liter * fueling.amount_liters);

                            return (
                                <Table.Row
                                    key={fueling.fueling_id}
                                    onClick={() => setSelectedId(isSelected ? null : fueling.fueling_id)}
                                    cursor="pointer"
                                    data-selected={isSelected ? "" : undefined}
                                    _selected={{
                                        bg: "blue.50",
                                        _hover: { bg: "blue.100" },
                                        "& > td": { color: "blue.700", fontWeight: "semibold" }
                                    }}
                                    _hover={{ bg: "gray.50" }}
                                    transition="background 0.2s"
                                >
                                    <Table.Cell>
                                        <DateFormatter dateString={fueling.date} />
                                    </Table.Cell>
                                    <Table.Cell>{fueling.amount_liters} l</Table.Cell>
                                    <Table.Cell>{fueling.price_per_liter} Ft/l</Table.Cell>
                                    <Table.Cell fontWeight="bold">
                                        {totalPrice.toLocaleString()} Ft
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

export default FuelingsTable;