import { VStack, Text, Stack, IconButton } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import VehiclesTable from "./vehicles-table/VehiclesTable";
import { FaCar } from "react-icons/fa6";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function Vehicles() {
    return (
        <GridBox header={"Járművek"}>

            <VStack h="calc(100% - 5vh)" padding={"0.5rem"}>

                <VehiclesTable />

                <Stack flexDirection={"row"}>

                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <FaCar />
                        <Text fontSize={"sm"}>Új jármű rögzítése</Text>
                    </IconButton>

                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"} bg={"green.600"}>
                        <FaEdit />
                        <Text fontSize={"sm"}>Szerkesztés</Text>
                    </IconButton>

                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"} bg={"red.600"}>
                        <FaTrashAlt />
                        <Text fontSize={"sm"}>Törlés</Text>
                    </IconButton>

                </Stack>

            </VStack>

        </GridBox>
    );
}

export default Vehicles;