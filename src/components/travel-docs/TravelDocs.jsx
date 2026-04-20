import { VStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import TravelDocsTable from "./travel-docs-table/TravelDocsTable";

function TravelDocs() {
    return (
        <GridBox header={"Menetlevelek"}>
            <VStack h="calc(100% - 5vh)" padding="0.5rem">
                <TravelDocsTable/>
            </VStack>
        </GridBox>
    );
}

export default TravelDocs;