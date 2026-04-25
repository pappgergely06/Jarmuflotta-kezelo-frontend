import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import Cookies from "js-cookie";
import useSelectedVehicle from "../../../hooks/useSelectedVehicle";
import { useRefresh } from "../../../contexts/refresh/RefreshContext";
import { fetchServicesByVehicleId } from "../../../utils/api";

function ServicesTable() {

    const { triggers } = useRefresh()
    const { selectedVehicle } = useSelectedVehicle();

    const [services, setServices] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        if (selectedVehicle) {
            fetchServicesByVehicleId(Cookies.get("auth_token"), selectedVehicle)
                .then((data) => setServices(data))
                .catch((error) => console.error(error));
        }
    }, [triggers.services]);

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
                    {services.map((service) => {
                        const isSelected = selectedId === service.service_id;

                        return (
                            <Table.Row
                                key={service.service_id}
                                onClick={() => setSelectedId(isSelected ? null : service.service_id)}
                                cursor="pointer"
                                data-selected={isSelected ? "" : undefined}
                                _selected={{
                                    bg: "blue.100",
                                    _hover: { bg: "blue.200" },
                                    "& > td": { color: "blue.900", fontWeight: "bold" }
                                }}
                                _hover={{ bg: "gray.100" }}
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
                    })}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    );
}

export default ServicesTable;