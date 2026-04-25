import { HStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import TravelDocForm from "./forms/travel-doc-form/TravelDocForm";
import FuelingForm from "./forms/fueling-form/FuelingForm";
import ServiceForm from "./forms/service-form/ServiceForm";

function DataInput() {
    return (
        <GridBox header={"Adatrögzítés"}>
            <HStack h="calc(100% - 5vh)" padding={"0.5rem"} alignItems="stretch">
                <TravelDocForm width={"100%"} />
                <FuelingForm width={"100%"} />
                <ServiceForm width={"100%"} />
            </HStack>
        </GridBox>
    );
}

export default DataInput;