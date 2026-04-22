import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import { fetchFuelings } from "../../../utils/api";
import Cookies from "js-cookie";

function FuelingsTable() {

    const [fuelings, setFuelings] = useState([]);

    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        fetchFuelings(Cookies.get("auth_token"))
            .then((data) => setFuelings(data))
            .catch((error) => console.error(error))
    })

    function calcPrice(price_per_liter, amount_liters) {
        return Math.round(price_per_liter * amount_liters)
    }
    return (
        <Table.ScrollArea color="black" maxHeight={"100%"} w="100%">
            <Table.Root size="md" stickyHeader interactive>
                <Table.Header bg="gray.200">
                    <Table.Row>
                        <Table.ColumnHeader fontWeight={"bold"}>Dátum</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight={"bold"}>Tankolt Liter</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight={"bold"}>Literenkénti ár</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight={"bold"}>Fizetett összeg</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {fuelings.map((fueling) => {
                        const isSelected = selectedId === fueling.id

                        return (
                            <Table.Row
                                key={fueling.id}
                                onClick={() => setSelectedId(isSelected ? null : fueling.id)}
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
                                    <DateFormatter dateString={fueling.date}/>
                                </Table.Cell>
                                <Table.Cell>{fueling.amount_liters}l</Table.Cell>
                                <Table.Cell>{fueling.price_per_liter}Ft/l</Table.Cell>
                                <Table.Cell>{
                                    calcPrice(
                                        fueling.price_per_liter,
                                        fueling.amount_liters
                                    )
                                }Ft</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    );
}

export default FuelingsTable;