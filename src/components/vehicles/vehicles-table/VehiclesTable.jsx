import { Center, Table, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchVehicles } from "../../../utils/api";
import Cookies from "js-cookie";
import DateFormatter from "../../ui/date-formatter/DateFormatter";
import useSelectedVehicle from "../../../hooks/useSelectedVehicle";
import { useRefresh } from "../../../contexts/refresh/RefreshContext";

function VehiclesTable() {
  const { triggers } = useRefresh();
  const { selectedVehicle, setSelectedVehicle } = useSelectedVehicle();

  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchVehicles(Cookies.get("auth_token"))
      .then((data) => {
        setVehicles(data || []);
      })
      .catch((error) => {
        console.error("Hiba a járművek lekérésekor:", error);
      })
      .finally(() => setIsLoading(false));
  }, [triggers.vehicles]);

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
            <Table.ColumnHeader fontWeight="bold">Rendszám</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Alvázszám</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Évjárat</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Márka</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Típus</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Óraállás</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Kötelező biztosítás</Table.ColumnHeader>
            <Table.ColumnHeader fontWeight="bold">Műszaki vizsga</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan={8}>
                <Center py={10}>
                  <Spinner color="blue.500" />
                </Center>
              </Table.Cell>
            </Table.Row>
          ) : vehicles.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan={8}>
                <Center py={10}>
                  <Text color="gray.500">Nincsenek megjeleníthető járművek!</Text>
                </Center>
              </Table.Cell>
            </Table.Row>
          ) : (
            vehicles.map((vehicle) => {
              const isSelected = selectedVehicle === vehicle.vehicle_id;

              return (
                <Table.Row
                  key={vehicle.vehicle_id}
                  onClick={() => setSelectedVehicle(isSelected ? null : vehicle.vehicle_id)}
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
                  <Table.Cell>{vehicle.lisence_plate}</Table.Cell>
                  <Table.Cell >{vehicle.vin}</Table.Cell>
                  <Table.Cell>{vehicle.year}</Table.Cell>
                  <Table.Cell>{vehicle.brand}</Table.Cell>
                  <Table.Cell>{vehicle.model}</Table.Cell>
                  <Table.Cell textAlign="right">
                    {vehicle.start_odometer?.toLocaleString()} km
                  </Table.Cell>
                  <Table.Cell>
                    <DateFormatter dateString={vehicle.insurance_expiry} />
                  </Table.Cell>
                  <Table.Cell>
                    <DateFormatter dateString={vehicle.next_technical_exam} />
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

export default VehiclesTable;