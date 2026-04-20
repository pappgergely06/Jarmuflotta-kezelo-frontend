import { IconButton, Stack, Text, VStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import DriverTable from "./driver-table/DriverTable";
import { IoIosPersonAdd } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function Drivers() {
    return (
        <GridBox header={"Sofőrök"}>

            <VStack h="calc(100% - 5vh)">
                <DriverTable />

                <Stack flexDirection={"row"}>

                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <IoIosPersonAdd />
                        <Text fontSize={"sm"}>Új sofőr rögzítése</Text>
                    </IconButton>

                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"} bg={"green.600"}>
                        <FaEdit />
                        <Text fontSize={"sm"}>Szerkesztés</Text>
                    </IconButton>

                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"} bg={"red.600"}>
                        <FaTrashAlt/>
                        <Text fontSize={"sm"}>Törlés</Text>
                    </IconButton>

                </Stack>

            </VStack>

        </GridBox>
    );
}

export default Drivers;