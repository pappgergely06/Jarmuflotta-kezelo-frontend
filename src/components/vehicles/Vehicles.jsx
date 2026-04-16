import {VStack, Text, Stack, IconButton } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import VehiclesTable from "./vehicles-table/VehiclesTable";
import { BsFuelPumpFill } from "react-icons/bs";
import { FaCar, FaScrewdriverWrench } from "react-icons/fa6";
import { MdAddRoad } from "react-icons/md";

function Vehicles() {
    return (
        <GridBox header={"Járművek"}>
            <VStack height={"100%"} padding={"0.5rem"}>
                <VehiclesTable />
                <Stack flexDirection={"row"}>
                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <MdAddRoad />
                        <Text fontSize={"sm"}>Menetlevél rögzítés</Text>
                    </IconButton>
                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <BsFuelPumpFill />
                        <Text fontSize={"sm"}>Tankolás rögzítés</Text>
                    </IconButton>
                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <FaScrewdriverWrench />
                        <Text fontSize={"sm"}>Szerviz rögzítés</Text>
                    </IconButton>
                    <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                        <FaCar/>
                        <Text fontSize={"sm"}>Új jármű hozzáadása</Text>
                    </IconButton>
                </Stack>
            </VStack>
        </GridBox>
    );
}

export default Vehicles;