import { Center, Table, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import Cookies from "js-cookie";
import useSelectedVehicle from "../../../hooks/useSelectedVehicle";
import { useRefresh } from "../../../contexts/refresh/RefreshContext";
import { fetchServicesByVehicleId } from "../../../utils/api";

function ServicesTable() {
    const { triggers } = useRefresh();
    const { selectedVehicle } = useSelectedVehicle();

    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        if (!selectedVehicle) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        fetchServicesByVehicleId(Cookies.get("auth_token"), selectedVehicle)
            .then((data) => {
                setServices(data || []);
            })
            .catch((error) => {
                console.error("Hiba a szervizek lekérésekor:", error);
            })
            .finally(() => setIsLoading(false));

    }, [triggers.services, selectedVehicle]);

    return (
        <Table.ScrollArea color="black" height="60vh" w="100%">
            <Table.Root size="md" stickyHeader interactive>
                <Table.Header bg="gray.200">
                    <Table.Row>
                        <Table.ColumnHeader fontWeight="bold">Dátum</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Következő szerviz</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">Típus</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {isLoading ? (
                        <Table.Row>
                            <Table.Cell colSpan={3}>
                                <Center py={10}>
                                    <Spinner color="blue.500" />
                                </Center>
                            </Table.Cell>
                        </Table.Row>
                    ) : services.length === 0 ? (
                        <Table.Row>
                            <Table.Cell colSpan={3}>
                                <Center py={10}>
                                    <Text color="gray.500">Nincs rögzített szerviz esemény!</Text>
                                </Center>
                            </Table.Cell>
                        </Table.Row>
                    ) : (
                        services.map((service) => {
                            const isSelected = selectedId === service.service_id;

                            return (
                                <Table.Row
                                    key={service.service_id}
                                    onClick={() => setSelectedId(isSelected ? null : service.service_id)}
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
                                        <DateFormatter dateString={service.date} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <DateFormatter dateString={service.next_service}/>
                                    </Table.Cell>
                                    <Table.Cell>{service.type}</Table.Cell>
                                </Table.Row>
                            );
                        })
                    )}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    );
}

export default ServicesTable;