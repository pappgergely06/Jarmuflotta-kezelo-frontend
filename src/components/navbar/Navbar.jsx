import { Box, Button, CloseButton, Dialog, Drawer, Flex, HStack, IconButton, Image, Popover, Portal, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import useAuth from "../../hooks/useAuth";

function Navbar() {

    const { user, logout } = useAuth()

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

                    <Popover.Root lazyMount unmountOnExit>
                        <Popover.Trigger asChild>
                            <IconButton variant={"ghost"} size={"xl"} rounded={"full"} bg={"transparent"}>
                                <CgProfile color='rgb(48, 166, 172)' />
                            </IconButton>
                        </Popover.Trigger>
                        <Portal>
                            <Popover.Positioner>
                                <Popover.Content bg={"#121C1E"}>
                                    <Popover.Arrow />
                                    <Popover.Body>
                                        <HStack justifyContent={"space-between"}>
                                            <Popover.Title fontWeight="medium">Bejelentkezve: {user.username}</Popover.Title>
                                            <Dialog.Root size={"sm"}>
                                                <Dialog.Trigger asChild>
                                                    <IconButton variant={"ghost"} size={"xl"} rounded={"full"} bg={"transparent"}>
                                                        <LuLogOut color='rgb(48, 166, 172)' />
                                                    </IconButton>
                                                </Dialog.Trigger>
                                                <Portal>
                                                    <Dialog.Backdrop />
                                                    <Dialog.Positioner>
                                                        <Dialog.Content bg={'#121C1E'}>
                                                            <Dialog.Header>
                                                                <Dialog.Title >Kijelentkezés</Dialog.Title>
                                                            </Dialog.Header>
                                                            <Dialog.Body>
                                                                <Text>Biztosan kijeletkezik?</Text>
                                                            </Dialog.Body>
                                                            <Dialog.Footer>
                                                                <Dialog.ActionTrigger asChild>
                                                                    <Button bg={"green.600"} color={"white"} variant="outline">Vissza</Button>
                                                                </Dialog.ActionTrigger>
                                                                <Button bg={"rgb(48, 166, 172)"} onClick={logout}>Igen</Button>
                                                            </Dialog.Footer>
                                                        </Dialog.Content>
                                                    </Dialog.Positioner>
                                                </Portal>
                                            </Dialog.Root>

                                        </HStack>
                                    </Popover.Body>
                                </Popover.Content>
                            </Popover.Positioner>
                        </Portal>
                    </Popover.Root>

                    <Drawer.Root>
                        <Drawer.Trigger asChild>
                            <IconButton variant={"ghost"} size={"xl"} rounded={"full"} bg={"transparent"}>
                                <FaBell color='rgb(48, 166, 172)' />
                            </IconButton>
                        </Drawer.Trigger>
                        <Portal>
                            <Drawer.Backdrop />
                            <Drawer.Positioner>
                                <Drawer.Content bg={'#121C1E'}>
                                    <Drawer.Header>
                                        <Drawer.Title>Értesítések</Drawer.Title>
                                    </Drawer.Header>
                                    <Drawer.Body>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </Drawer.Body>
                                    <Drawer.CloseTrigger asChild>
                                        <CloseButton bg={"#121C1E"} color={'rgb(48, 166, 172)'} size="sm" />
                                    </Drawer.CloseTrigger>
                                </Drawer.Content>
                            </Drawer.Positioner>
                        </Portal>
                    </Drawer.Root>

                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;