import { HStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import TravelDocForm from "./forms/travel-doc-form/TravelDocForm";
import FuelingForm from "./forms/fueling-form/FuelingForm";

function DataInput() {
    return (
        <GridBox header={"Adatrögzítés"}>
            <HStack h="calc(100% - 5vh)" padding={"0.5rem"}>
                <TravelDocForm/>
                <FuelingForm/>
            </HStack>
        </GridBox>
    );
}

export default DataInput;