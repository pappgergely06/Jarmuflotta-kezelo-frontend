import { Button, Flex, Text } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";

function Vehicles() {
    return (
        <GridBox header={"Járművek"}>
            <Flex 
                justifyContent={"flex-end"}
                padding={"0.5rem"}
            >
                <Button
                    w={"20%"}
                    h={"2rem"}
                    color={"white"}
                >
                    <Text fontSize={"sm"}>Jármű hozzáadása</Text>
                </Button>
            </Flex>
        </GridBox>
    );
}

export default Vehicles;