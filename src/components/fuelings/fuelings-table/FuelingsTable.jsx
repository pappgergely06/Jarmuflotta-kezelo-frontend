import { Table } from "@chakra-ui/react";
import { useState } from "react";

function FuelingsTable() {

    const [fuelings, setFuelings] = useState([
        { id: 1, date: '2024-01-05', amount_liters: 42.5, price_per_liter: 595 },
        { id: 2, date: '2024-01-18', amount_liters: 38.0, price_per_liter: 602 },
        { id: 3, date: '2024-02-02', amount_liters: 45.2, price_per_liter: 615 },
        { id: 4, date: '2024-02-15', amount_liters: 40.5, price_per_liter: 610 },
        { id: 5, date: '2024-03-01', amount_liters: 48.0, price_per_liter: 625 },
        { id: 6, date: '2024-03-14', amount_liters: 35.5, price_per_liter: 630 },
        { id: 7, date: '2024-03-28', amount_liters: 44.8, price_per_liter: 618 },
        { id: 8, date: '2024-04-10', amount_liters: 39.2, price_per_liter: 605 },
        { id: 9, date: '2024-04-25', amount_liters: 41.0, price_per_liter: 598 },
        { id: 10, date: '2024-05-08', amount_liters: 46.5, price_per_liter: 608 }
    ]);

    const [selectedId, setSelectedId] = useState(null)

    function calcPrice(price_per_liter, amount_liters) {
        return price_per_liter * amount_liters
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
                                <Table.Cell>{fueling.date}</Table.Cell>
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