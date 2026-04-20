import { VStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import FuelingsTable from "./fuelings-table/FuelingsTable";

function Fuelings() {
    return (
        <GridBox header={"Tankolások"}>
            <VStack h="calc(100% - 5vh)">
                <FuelingsTable/>
            </VStack>
        </GridBox>
    );
}

export default Fuelings;