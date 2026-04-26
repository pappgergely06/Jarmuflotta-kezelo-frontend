import { VStack, Text, Stack, IconButton, Dialog, Portal, CloseButton, Alert, Box } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import VehiclesTable from "./vehicles-table/VehiclesTable";
import { FaCar } from "react-icons/fa6";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import useSelectedVehicle from "../../hooks/useSelectedVehicle";
import Cookies from "js-cookie";
import AddVehicleForm from "../dialog-forms/add-vehicle-form/AddVehicleForm";
import { deleteVehicleById } from "../../utils/api";
import ModifyVehicleForm from "../dialog-forms/modify-vehicle-form/ModifyVehicleForm";
import SavedVehicleData from "../savedVehicleData/SavedVehicleData";
import { useRefresh } from "../../contexts/refresh/RefreshContext";

function Vehicles() {

    const { triggerRefresh } = useRefresh()
    const { selectedVehicle, setSelectedVehicle } = useSelectedVehicle()

    const handleDelete = async () => {
        if (selectedVehicle === null) {
            return alert("Válasszon járművet a táblázatból!");
        }

        if (window.confirm("Biztosan törli?")) {
            try {
                await deleteVehicleById(Cookies.get("auth_token"), selectedVehicle);
                setSelectedVehicle(null)
                triggerRefresh("vehicles")
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <GridBox header={"Járművek"}>

            <VStack h="calc(100% - 5vh)">

                <VehiclesTable />

                <Stack flexDirection={"row"}>



                    <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
                        <Dialog.Trigger asChild>
                            <IconButton px={"0.5rem"} h={"2rem"} bg={"blue.600"}>
                                <BsFillClipboard2DataFill />
                                <Text fontSize={"sm"}>Rögzített adatok</Text>
                            </IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content color={"black"} bg={"gray.200"}>
                                    <Dialog.Header>
                                        <Dialog.Title>Jármű adatai</Dialog.Title>
                                        <Dialog.CloseTrigger color={"white"} asChild>
                                            <CloseButton size="sm" />
                                        </Dialog.CloseTrigger>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        {
                                            selectedVehicle === null && (
                                                <Box>
                                                    <Alert.Root status="error">
                                                        <Alert.Indicator />
                                                        <Alert.Title>
                                                            Zárja be és válasszon járművet a táblázatból!
                                                        </Alert.Title>
                                                    </Alert.Root>
                                                </Box>
                                            )
                                        }
                                        {
                                            selectedVehicle !== null && (
                                                <SavedVehicleData/>
                                            )
                                        }
                                    </Dialog.Body>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>

                    <Dialog.Root size="lg" placement="center" motionPreset="slide-in-bottom">
                        <Dialog.Trigger asChild>
                            <IconButton px={"0.5rem"} h={"2rem"} color={"white"} bg={"green.600"}>
                                <FaEdit />
                                <Text fontSize={"sm"}>Szerkesztés</Text>
                            </IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content color={"black"}>
                                    <Dialog.Header>
                                        <Dialog.Title>Jármű szerkesztése</Dialog.Title>
                                        <Dialog.CloseTrigger color={"white"} asChild>
                                            <CloseButton size="sm" />
                                        </Dialog.CloseTrigger>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        {
                                            selectedVehicle === null && (
                                                <Box>
                                                    <Alert.Root status="error">
                                                        <Alert.Indicator />
                                                        <Alert.Title>
                                                            Zárja be és válasszon szerkesztendő járművet a táblázatból!
                                                        </Alert.Title>
                                                    </Alert.Root>
                                                </Box>
                                            )
                                        }
                                        {
                                            selectedVehicle !== null && (
                                                <ModifyVehicleForm/>
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
                                <FaCar />
                                <Text fontSize={"sm"}>Új jármű rögzítése</Text>
                            </IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content color={"black"}>
                                    <Dialog.Header>
                                        <Dialog.Title>Új jármű rögzítése</Dialog.Title>
                                        <Dialog.CloseTrigger color={"white"} asChild>
                                            <CloseButton size="sm" />
                                        </Dialog.CloseTrigger>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <AddVehicleForm/>
                                    </Dialog.Body>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>

                    <IconButton onClick={handleDelete} px={"0.5rem"} h={"2rem"} color={"white"} bg={"red.600"}>
                        <FaTrashAlt />
                        <Text fontSize={"sm"}>Törlés</Text>
                    </IconButton>

                </Stack>

            </VStack>

        </GridBox>
    );
}

export default Vehicles;