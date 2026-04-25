import { VStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import ServicesTable from "./services-table/ServicesTable";

function Services() {
    return (
        <GridBox header={"Szervizek"}>
            <VStack h="calc(100% - 5vh)">
                <ServicesTable/>
            </VStack>
        </GridBox>
    );
}

export default Services;