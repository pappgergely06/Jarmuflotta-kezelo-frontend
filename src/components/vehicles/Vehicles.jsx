import { Box, Flex, Text } from "@chakra-ui/react";

function Vehicles() {
    return (
        <Box
            width={"100%"}
            height={"5vh"}
            bg={"gray.200"}
            borderRadius={"0.5rem 0.5rem 0 0"}
        >
            <Flex
                justifyContent={"flex-start"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                paddingLeft={"1rem"}
            >
                <Text color={"black"} fontWeight={"bold"}>Járművek</Text>
            </Flex>
        </Box>
    );
}

export default Vehicles;