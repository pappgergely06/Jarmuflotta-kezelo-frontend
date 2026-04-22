import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import { fetchTravelDocs } from "../../../utils/api";
import Cookies from "js-cookie"

function TravelDocsTable() {

    const [travelDocs, setTravelDocs] = useState([]);

    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        fetchTravelDocs(Cookies.get("auth_token"))
            .then((data) => setTravelDocs(data))
            .catch((error) => console.error(error))
    }, [travelDocs])

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