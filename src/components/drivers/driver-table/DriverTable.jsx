import { Table } from "@chakra-ui/react";
import { useState } from "react";

const drivers = [
  {
    "id": 1,
    "name": "Kovács László",
    "car": "Toyota Corolla (AA-BB-123)",
    "license_number": "AB123456",
    "phone_number": "+36 30 123 4567",
    "email": "laci.kovacs@email.hu",
    "address": "1114 Budapest, Bartók Béla út 12.",
    "start_date": "2022-03-15"
  },
  {
    "id": 2,
    "name": "Nagy Beatrix",
    "car": "Ford Focus (RR-CC-456)",
    "license_number": "CD789012",
    "phone_number": "+36 20 987 6543",
    "email": "bea.nagy92@freemail.hu",
    "address": "4025 Debrecen, Piac utca 4.",
    "start_date": "2023-01-10"
  },
  {
    "id": 3,
    "name": "Horváth Tamás",
    "car": "Skoda Octavia (LL-DD-789)",
    "license_number": "EF345678",
    "phone_number": "+36 70 555 1234",
    "email": "t.horvath@cegnev.hu",
    "address": "6720 Szeged, Tisza Lajos krt. 18.",
    "start_date": "2021-11-20"
  },
  {
    "id": 4,
    "name": "Szabó Zsófia",
    "car": "Opel Astra (KK-EE-012)",
    "license_number": "GH901234",
    "phone_number": "+36 30 444 8899",
    "email": "zsofi.szabo@icloud.com",
    "address": "8000 Székesfehérvár, Várkörút 2.",
    "start_date": "2024-02-01"
  },
  {
    "id": 5,
    "name": "Molnár Gergő",
    "car": "Volkswagen Golf VII (MM-FF-345)",
    "license_number": "IJ567890",
    "phone_number": "+36 20 222 3344",
    "email": "gmolnar88@citromail.hu",
    "address": "9022 Győr, Dunakapu tér 5.",
    "start_date": "2020-08-15"
  },
  {
    "id": 6,
    "name": "Tóth Anikó",
    "car": "Suzuki Vitara (NN-GG-678)",
    "license_number": "KL123987",
    "phone_number": "+36 30 777 1122",
    "email": "aniko.toth@gmail.com",
    "address": "7621 Pécs, Király utca 12.",
    "start_date": "2022-05-20"
  },
  {
    "id": 7,
    "name": "Farkas Bence",
    "car": "Kia Ceed (PP-HH-901)",
    "license_number": "MN456123",
    "phone_number": "+36 70 333 4455",
    "email": "bence.farkas@outlook.hu",
    "address": "6000 Kecskemét, Szabadság tér 3.",
    "start_date": "2023-09-12"
  },
  {
    "id": 8,
    "name": "Varga Elena",
    "car": "Hyundai i30 (QQ-II-234)",
    "license_number": "OP789456",
    "phone_number": "+36 20 555 6677",
    "email": "varga.elena@cegnev.hu",
    "address": "4400 Nyíregyháza, Kossuth tér 1.",
    "start_date": "2021-02-28"
  },
  {
    "id": 9,
    "name": "Kiss Balázs",
    "car": "Dacia Duster (SS-JJ-567)",
    "license_number": "QR159357",
    "phone_number": "+36 30 888 9900",
    "email": "balazs.kiss@freemail.hu",
    "address": "3530 Miskolc, Széchenyi út 15.",
    "start_date": "2024-01-05"
  },
  {
    "id": 10,
    "name": "Takács Petra",
    "car": "Renault Clio (TT-KK-890)",
    "license_number": "ST246810",
    "phone_number": "+36 70 111 2233",
    "email": "petra.takacs@gmail.com",
    "address": "8200 Veszprém, Óváros tér 4.",
    "start_date": "2019-11-11"
  }
]

function DriverTable() {

  const [selectedId, setSelectedId] = useState(null)

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
            const isSelected = selectedId === driver.id

            return (
              <Table.Row
                key={driver.id}
                onClick={() => setSelectedId(isSelected ? null : driver.id)}
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
                <Table.Cell>{driver.phone_number}</Table.Cell>
                <Table.Cell>{driver.email}</Table.Cell>
                <Table.Cell>{driver.address}</Table.Cell>
                <Table.Cell>{driver.start_date}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}

export default DriverTable;