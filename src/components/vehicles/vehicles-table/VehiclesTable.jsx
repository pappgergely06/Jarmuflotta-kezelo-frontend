import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchVehicles } from "../../../utils/api";
import Cookies from "js-cookie";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import useSelectedVehicle from "../../../hooks/useSelectedVehicle";

function VehiclesTable() {

  const {selectedVehicle, setSelectedVehicle} = useSelectedVehicle()

  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    fetchVehicles(Cookies.get("auth_token"))
      .then((data) => setVehicles(data))
      .catch((error) => console.error(error))
  })

  return (
    <Table.ScrollArea
      color="black"
      w="100%"
      borderWidth="1px"
      borderRadius="md"
      h="80%"
    >
      <Table.Root size="md" stickyHeader interactive>
        <Table.Header bg="gray.200">
          <Table.Row>
            <Table.ColumnHeader fontWeight={"bold"}>Rendszám</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Alvázszám</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Évjárat</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Márka</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Típus</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Óraállás</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Kötelező biztosítás</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight={"bold"}>Műszaki vizsga</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {vehicles.map((vehicle) => {
            const isSelected = selectedVehicle === vehicle.vehicle_id

            return (
              <Table.Row
                key={vehicle.vehicle_id}
                onClick={() => setSelectedVehicle(isSelected ? null : vehicle.vehicle_id)}
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
                <Table.Cell>{vehicle.lisence_plate}</Table.Cell>
                <Table.Cell>{vehicle.vin}</Table.Cell>
                <Table.Cell>{vehicle.year}</Table.Cell>
                <Table.Cell>{vehicle.brand}</Table.Cell>
                <Table.Cell>{vehicle.model}</Table.Cell>
                <Table.Cell>{vehicle.start_odometer} km</Table.Cell>
                <Table.Cell>
                  <DateFormatter dateString={vehicle.insurance_expiry} />
                </Table.Cell>
                <Table.Cell>
                  <DateFormatter dateString={vehicle.next_technical_exam} />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
} export default VehiclesTable;