import { Button, VStack, Text } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import VehiclesTable from "./vehicles-table/VehiclesTable";

function Vehicles() {
    return (
        <GridBox header={"Járművek"}>
            <VStack padding={"0.5rem"}>
                <VehiclesTable />
                <Button
                    w={"20%"}
                    h={"2rem"}
                    color={"white"}
                >
                    <Text fontSize={"sm"}>Jármű hozzáadása</Text>
                </Button>
            </VStack>
        </GridBox>
    );
}

export default Vehicles;