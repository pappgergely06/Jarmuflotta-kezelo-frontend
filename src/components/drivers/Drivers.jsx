import { IconButton, Stack, Text, VStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import DriverTable from "./driver-table/DriverTable";
import { IoIosPersonAdd } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import { PiAddressBook } from "react-icons/pi";

function Drivers() {
    return (
        <GridBox header={"Sofőrök"}>
            <VStack height="100%" padding="0.5rem">
                <DriverTable />
                <Stack flexDirection={"row"}>
                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <IoIosPersonAdd />
                        <Text fontSize={"sm"}>Új sofőr rögzítése</Text>
                    </IconButton>
                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <FaCar />
                        <Text fontSize={"sm"}>Autó hozzárendelés</Text>
                    </IconButton>
                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <PiAddressBook/>
                        <Text fontSize={"sm"}>Adatmódosítás</Text>
                    </IconButton>
                </Stack>
            </VStack>
        </GridBox>
    );
}

export default Drivers;