import { Alert, Box, CloseButton, Dialog, IconButton, Portal, Stack, Text, VStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import DriverTable from "./driver-table/DriverTable";
import { IoIosPersonAdd } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteDriverById } from "../../utils/api";
import { useState } from "react";
import Cookies from "js-cookie";
import AddDriverForm from "../dialog-forms/add-driver-form/AddDriverForm";

function Drivers() {
    const [selectedId, setSelectedId] = useState(null);

    const handleDelete = async () => {
        if (!selectedId) {
            return alert("Válasszon sofőrt a táblázatból!");
        }

        if (window.confirm("Biztosan törli?")) {
            try {
                await deleteDriverById(Cookies.get("auth_token"), selectedId);
                setSelectedId(null);
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <GridBox header={"Sofőrök"}>
            <VStack h="calc(100% - 5vh)">
                <DriverTable onSelect={setSelectedId} selectedId={selectedId} />

                <Stack flexDirection={"row"}>

                    <Dialog.Root size="lg" placement="center" motionPreset="slide-in-bottom">
                        <Dialog.Trigger asChild>
                            <IconButton px={"0.5rem"} h={"2rem"} color={"white"} bg={"green.600"}>
                                <FaEdit /><Text fontSize={"sm"}>Szerkesztés</Text>
                            </IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content color={"black"}>
                                    <Dialog.Header>
                                        <Dialog.Title>Sofőr szerkesztése</Dialog.Title>
                                        <Dialog.CloseTrigger color={"white"} asChild>
                                            <CloseButton size="sm" />
                                        </Dialog.CloseTrigger>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        {
                                            selectedId === null && (
                                                <Box>
                                                    <Alert.Root status="error">
                                                        <Alert.Indicator />
                                                        <Alert.Title>
                                                            Zárja be és válasszon sofőrt a táblázatból!
                                                        </Alert.Title>
                                                    </Alert.Root>
                                                </Box>
                                            )
                                        }
                                        {
                                            selectedId !== null && (
                                                <p>{selectedId}</p>
                                            )
                                        }
                                    </Dialog.Body>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>

                    <Dialog.Root size="lg" placement="center" motionPreset="slide-in-bottom">
                        <Dialog.Trigger asChild>
                            <IconButton px={"0.5rem"} h={"2rem"} color={"white"}>
                                <IoIosPersonAdd /><Text fontSize={"sm"}>Új sofőr</Text>
                            </IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content color={"black"}>
                                    <Dialog.Header>
                                        <Dialog.Title>Új sofőr rögzítése</Dialog.Title>
                                        <Dialog.CloseTrigger color={"white"} asChild>
                                            <CloseButton size="sm" />
                                        </Dialog.CloseTrigger>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <AddDriverForm/>
                                    </Dialog.Body>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>

                    <IconButton onClick={handleDelete} px={"0.5rem"} h={"2rem"} color={"white"} bg={"red.600"}>
                        <FaTrashAlt /><Text fontSize={"sm"}>Törlés</Text>
                    </IconButton>
                </Stack>
            </VStack>
        </GridBox>
    );
}

export default Drivers;