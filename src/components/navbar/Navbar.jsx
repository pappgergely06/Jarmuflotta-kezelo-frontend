import { Box, Flex, Image } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa";

function Navbar() {
    return (
        <Box
            bg="#121C1E"
            colSpan={3}
            marginBottom={2}
            w="90vw"
            h="10vh"
            borderRadius="0.5rem"
        >
            <Flex width={"100%"} height={"100%"} justifyContent={"space-between"}>
                <Image paddingLeft={"1rem"} src="src\assets\logo.png" />
                <Flex height={"100%"}
                    paddingRight={'1rem'}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    gap={"2rem"}
                >
                    <CgProfile size={"40%"} />
                    <FaBell size={"40%"} color='rgb(48, 166, 172)' />
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;