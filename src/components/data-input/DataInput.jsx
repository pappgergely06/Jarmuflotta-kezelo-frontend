import { HStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import TravelDocForm from "./forms/travel-doc-form/TravelDocForm";
import FuelingForm from "./forms/fueling-form/FuelingForm";
import ServiceForm from "./forms/service-form/ServiceForm";

function DataInput() {
    return (
        <GridBox header={"Adatrögzítés"}>
            <HStack h="calc(100% - 5vh)" padding={"0.5rem"}>
                <TravelDocForm width={"25%"}/>
                <FuelingForm width={"25%"}/>
                <ServiceForm width={"50%"}/>
            </HStack>
        </GridBox>
    );
}

export default DataInput;