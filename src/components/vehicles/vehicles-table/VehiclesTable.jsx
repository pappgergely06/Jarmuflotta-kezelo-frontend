import { RadioGroup, RadioGroupItem, Table } from "@chakra-ui/react";
import { useState } from "react";

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
  },
  {
    id: 6,
    plate: "ABC-123",
    vin: "WF0DXXGAKD1234567",
    year: 2012,
    make: "Ford",
    model: "Focus",
    odo: 285000,
    ins_exp: "2024-03-10",
    insp_exp: "2024-06-15"
  },
  {
    id: 7,
    plate: "AA-KZ-999",
    vin: "TSMEYB22S00112233",
    year: 2021,
    make: "Suzuki",
    model: "Vitara",
    odo: 32100,
    ins_exp: "2025-09-20",
    insp_exp: "2025-09-20"
  },
  {
    id: 8,
    plate: "PUX-782",
    vin: "UU1HSDCW456789012",
    year: 2017,
    make: "Dacia",
    model: "Duster",
    odo: 112000,
    ins_exp: "2024-12-05",
    insp_exp: "2025-02-10"
  },
  {
    id: 9,
    plate: "AA-LY-001",
    vin: "W1K2040451A123456",
    year: 2024,
    make: "Mercedes-Benz",
    model: "C200",
    odo: 5400,
    ins_exp: "2026-04-12",
    insp_exp: "2028-04-12"
  },
  {
    id: 10,
    plate: "LMN-987",
    vin: "VF33H5FZH12345678",
    year: 2010,
    make: "Peugeot",
    model: "308",
    odo: 198750,
    ins_exp: "2024-05-20",
    insp_exp: "2023-11-15"
  },
  {
    id: 11,
    plate: "AA-HH-444",
    vin: "U5YHM512AD1234567",
    year: 2019,
    make: "Kia",
    model: "Ceed",
    odo: 76300,
    ins_exp: "2025-07-01",
    insp_exp: "2025-07-01"
  },
  {
    id: 12,
    plate: "SZZ-101",
    vin: "KL1JF696D71234567",
    year: 2013,
    make: "Chevrolet",
    model: "Cruze",
    odo: 165000,
    ins_exp: "2024-10-10",
    insp_exp: "2025-01-20"
  }
];

function VehiclesTable() {

  const [selectedId, setSelectedId] = useState(null)

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
          {carTestData.map((vehicle) => {
            const isSelected = selectedId === vehicle.id

            return (
              <Table.Row
                key={vehicle.id}
                onClick={() => setSelectedId(isSelected ? null : vehicle.id)}
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
                <Table.Cell>{vehicle.plate}</Table.Cell>
                <Table.Cell>{vehicle.vin}</Table.Cell>
                <Table.Cell>{vehicle.year}</Table.Cell>
                <Table.Cell>{vehicle.make}</Table.Cell>
                <Table.Cell>{vehicle.model}</Table.Cell>
                <Table.Cell>{vehicle.odo} km</Table.Cell>
                <Table.Cell>{vehicle.ins_exp}</Table.Cell>
                <Table.Cell>{vehicle.insp_exp}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
} export default VehiclesTable;