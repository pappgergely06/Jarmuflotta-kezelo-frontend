import { HStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import TravelDocForm from "./forms/travel-doc-form/TravelDocForm";

function DataInput() {
    return (
        <GridBox header={"Adatrögzítés"}>
            <HStack h="calc(100% - 5vh)" padding={"0.5rem"}>
                <TravelDocForm/>
            </HStack>
        </GridBox>
    );
}

export default DataInput;