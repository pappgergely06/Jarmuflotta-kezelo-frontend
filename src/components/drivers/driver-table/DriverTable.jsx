import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchDrivers } from "../../../utils/api";
import Cookies from "js-cookie";
import DateFormatter from "../../ui/date-formatter/DateFormatter";

function DriverTable() {

  const [selectedId, setSelectedId] = useState()

  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    fetchDrivers(Cookies.get("auth_token"))
      .then((data) => setDrivers(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <Table.ScrollArea color="black" borderWidth="1px" borderRadius="md" h="80%" w="100%">
      <Table.Root size="md" stickyHeader interactive>
        <Table.Header bg="gray.200">
          <Table.Row>
            <Table.ColumnHeader fontWeight={"bold"}>Név</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Autó</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Jogosítvány száma</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Telefonszám</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Email</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Lakcím</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Kezdés dátum</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {drivers.map((driver) => {
            const isSelected = selectedId === driver.driver_id

            return (
              <Table.Row
                key={driver.driver_id}
                onClick={() => setSelectedId(isSelected ? null : driver.driver_id)}
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
                <Table.Cell>{driver.name}</Table.Cell>
                <Table.Cell>{driver.car}</Table.Cell>
                <Table.Cell>{driver.license_number}</Table.Cell>
                <Table.Cell>{driver.phone}</Table.Cell>
                <Table.Cell>{driver.email}</Table.Cell>
                <Table.Cell>{driver.address}</Table.Cell>
                <Table.Cell>
                  <DateFormatter dateString={driver.starting_date} />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}

export default DriverTable;