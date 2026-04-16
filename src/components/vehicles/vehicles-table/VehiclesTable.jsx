import { Table } from "@chakra-ui/react";

function VehiclesTable() {


  const carTestData = [
    {
      id: 1,
      plate: "AA-AB-123",
      vin: "WVWZZZ1KZEW001234",
      year: 2022,
      make: "Volkswagen",
      model: "Golf 8",
      odo: 45200,
      ins_exp: "2025-05-12",
      insp_exp: "2026-05-10"
    },
    {
      id: 2,
      plate: "RST-456",
      vin: "TMBGF21Z2F2123456",
      year: 2018,
      make: "Skoda",
      model: "Octavia",
      odo: 156800,
      ins_exp: "2024-11-20",
      insp_exp: "2024-10-15"
    },
    {
      id: 3,
      plate: "AA-DF-789",
      vin: "JTDZN321000987654",
      year: 2023,
      make: "Toyota",
      model: "Corolla",
      odo: 12500,
      ins_exp: "2026-02-01",
      insp_exp: "2027-02-01"
    },
    {
      id: 4,
      plate: "NMK-212",
      vin: "SHHFK2760EU123987",
      year: 2015,
      make: "Honda",
      model: "Civic",
      odo: 210450,
      ins_exp: "2024-08-30",
      insp_exp: "2025-06-14"
    },
    {
      id: 5,
      plate: "AA-GZ-555",
      vin: "WBA3A51000K123456",
      year: 2020,
      make: "BMW",
      model: "320d",
      odo: 89000,
      ins_exp: "2025-01-15",
      insp_exp: "2024-12-20"
    }
  ];

  return (
    <Table.ScrollArea color={"black"} w="100%" borderWidth="1px" borderRadius="md" h="100%">
      <Table.Root size="md" stickyHeader interactive striped>
        <Table.Header bg="gray.200">
          <Table.Row>
            <Table.ColumnHeader>Rendszám</Table.ColumnHeader>
            <Table.ColumnHeader>Alvázszám</Table.ColumnHeader>
            <Table.ColumnHeader>Évjárat</Table.ColumnHeader>
            <Table.ColumnHeader>Márka</Table.ColumnHeader>
            <Table.ColumnHeader>Típus</Table.ColumnHeader>
            <Table.ColumnHeader>Óraállás</Table.ColumnHeader>
            <Table.ColumnHeader>Kötelező biztosítás</Table.ColumnHeader>
            <Table.ColumnHeader>Műszaki vizsga</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {carTestData.map((vehicle) => (
            <Table.Row
              key={vehicle.id}
            >
              <Table.Cell>{vehicle.plate}</Table.Cell>
              <Table.Cell>{vehicle.vin}</Table.Cell>
              <Table.Cell>{vehicle.year}</Table.Cell>
              <Table.Cell>{vehicle.make}</Table.Cell>
              <Table.Cell>{vehicle.model}</Table.Cell>
              <Table.Cell>{vehicle.odo} km</Table.Cell>
              <Table.Cell>{vehicle.ins_exp}</Table.Cell>
              <Table.Cell>{vehicle.insp_exp}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
} export default VehiclesTable;