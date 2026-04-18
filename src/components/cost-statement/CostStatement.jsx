import { HStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import CostStatementForm from "./form/CostStatementForm";

function CostStatement() {
    return (
        <GridBox header={"Költségkimutatás"}>
            <HStack h="calc(100% - 5vh)" padding={"0.5rem"}>
                <CostStatementForm/>
            </HStack>
        </GridBox>
    );
}

export default CostStatement;