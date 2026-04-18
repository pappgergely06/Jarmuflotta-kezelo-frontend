import { Box, Button, CloseButton, Dialog, Flex, IconButton, Image, Portal, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import useAuth from "../../hooks/useAuth";

function Navbar() {


    const { logout } = useAuth()

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
                    gap={"1rem"}
                >
                    <IconButton variant={"ghost"} size={"xl"} rounded={"full"} bg={"transparent"}>
                        <CgProfile color='rgb(48, 166, 172)' />
                    </IconButton>

                    <IconButton variant={"ghost"} size={"xl"} rounded={"full"} bg={"transparent"}>
                        <FaBell color='rgb(48, 166, 172)' />
                    </IconButton>

                    <Dialog.Root size={"sm"}>
                        <Dialog.Trigger asChild>
                            <IconButton variant={"ghost"} size={"xl"} rounded={"full"} bg={"transparent"}>
                                <LuLogOut color='rgb(48, 166, 172)' />
                            </IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content>
                                    <Dialog.Header>
                                        <Dialog.Title color={"black"}>Kijelentkezés</Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <Text color={"black"}>Biztosan kijeletkezik?</Text>
                                    </Dialog.Body>
                                    <Dialog.Footer>
                                        <Dialog.ActionTrigger asChild>
                                            <Button color={"white"} variant="outline">Vissza</Button>
                                        </Dialog.ActionTrigger>
                                        <Button onClick={logout}>Igen</Button>
                                    </Dialog.Footer>
                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton size="sm" color={"white"}/>
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>


                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;