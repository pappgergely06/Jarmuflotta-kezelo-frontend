import { Table } from "@chakra-ui/react";
import { useState } from "react";

function TravelDocsTable() {

    const [travelDocs, setTravelDocs] = useState([
        { id: 1, date: '2024-05-01', start_km: 10000, end_km: 10150 },
        { id: 2, date: '2024-05-03', start_km: 10150, end_km: 10220 },
        { id: 3, date: '2024-05-05', start_km: 10220, end_km: 10400 },
        { id: 4, date: '2024-05-08', start_km: 10400, end_km: 10410 },
        { id: 5, date: '2024-05-10', start_km: 10410, end_km: 10600 },
        { id: 6, date: '2024-05-12', start_km: 10600, end_km: 10750 },
        { id: 7, date: '2024-05-15', start_km: 10750, end_km: 10800 },
        { id: 8, date: '2024-05-20', start_km: 10800, end_km: 11050 },
    ]);

    const [selectedId, setSelectedId] = useState(null)

    function calcDistance(start, end) {
        return end - start
    }
    return (
        <Table.ScrollArea color="black" maxHeight={"100%"} w="100%">
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
                        const isSelected = selectedId === doc.id

                        return (
                            <Table.Row
                                key={doc.id}
                                onClick={() => setSelectedId(isSelected ? null : doc.id)}
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
                                <Table.Cell>{doc.date}</Table.Cell>
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