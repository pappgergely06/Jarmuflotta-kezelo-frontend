import { Flex, Text } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";

function Overview() {
    return (
        <GridBox header={"Flotta áttekintés"}>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                color={"black"}
            >
                <Flex padding={"0.5rem 0.5rem 0.5rem 1rem"} width={"100%"} justifyContent={"flex-start"}>
                    <Text fontWeight={"bold"}>Figyelmeztetések és határidők</Text>
                </Flex>
            </Flex>
        </GridBox>
    );
}

export default Overview;