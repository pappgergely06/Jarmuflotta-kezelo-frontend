import { Alert, Box, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import "../../../forms-style/FormsStyle.module.css";
import { useState } from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import useAuth from "../../../../hooks/useAuth";
import useSelectedVehicle from "../../../../hooks/useSelectedVehicle";
import { addService } from "../../../../utils/api";
import Cookies from "js-cookie";
import { useRefresh } from "../../../../contexts/refresh/RefreshContext";

function ServiceForm({ width }) {
    const { triggerRefresh } = useRefresh();
    const { user } = useAuth();
    const { selectedVehicle } = useSelectedVehicle();

    const today = new Date().toISOString().split('T')[0];

    const [date, setDate] = useState(today);
    const [type, setType] = useState("");
    const [nextService, setNextService] = useState(today);
    const [error, setError] = useState(null);

    function clearForm() {
        setDate(today);
        setType("");
        setNextService(today);
        setError(null);
    }

    function validateService() {
        if (user?.role === "admin" && selectedVehicle === null) return "Válasszon ki járművet a táblázatból!";
        if (!date) return "Dátum megadása kötelező!";
        if (!type || type.trim().length < 3) return "Típus megadása kötelező (min. 3 karakter)!";
        if (nextService && nextService < date) return "A következő szerviz nem lehet korábban a mostaninál!";
        return null;
    }

    function saveService() {
        const e = validateService();
        const vehicle_id = user?.role === "admin" ? selectedVehicle : user?.driver_vehicle_id;

        if (e === null) {
            addService(Cookies.get("auth_token"), {
                "date": date,
                "type": type,
                "next_service": nextService,
                "vehicle_id": vehicle_id
            })
            .then(() => {
                triggerRefresh("services");
                clearForm();
            })
            .catch(err => {
                console.error(err);
                setError("Hiba történt a mentés során!");
            });
        } else {
            setError(e);
        }
    }

    return (
        <Flex height={"100%"} bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={width}>
            <HStack justifyContent={"center"}>
                <FaScrewdriverWrench color="black" />
                <Text color={"black"} fontWeight={"bold"}>Szerviz</Text>
            </HStack>

            <HStack width={"100%"} alignItems="flex-start">
                <VStack width={"50%"}>
                    <Text color={"black"}>Dátum</Text>
                    <input 
                        onChange={(e) => setDate(e.target.value)} 
                        value={date} 
                        type="date" 
                    />
                </VStack>
                <VStack width={"50%"}>
                    <Text color={"black"}>Következő szerviz</Text>
                    <input 
                        onChange={(e) => setNextService(e.target.value)} 
                        value={nextService} 
                        type="date" 
                        min={date}
                    />
                </VStack>
            </HStack>

            <VStack width={"100%"}>
                <Text color={"black"}>Típus / Megnevezés</Text>
                <input 
                    style={{ width: "100%" }}
                    onChange={(e) => setType(e.target.value)} 
                    value={type} 
                    type="text" 
                    placeholder="pl. Olajcsere, Műszaki vizsga"
                />
            </VStack>

            {error !== null && (
                <Box>
                    <Alert.Root status="error">
                        <Alert.Indicator />
                        <Alert.Title>
                            {error}
                        </Alert.Title>
                    </Alert.Root>
                </Box>
            )}

            <IconButton onClick={saveService} bg={"green.600"} color="white" mt={"auto"}>
                <HStack spacing={2}>
                    <IoIosSave />
                    <Text>Rögzít</Text>
                </HStack>
            </IconButton>
        </Flex>
    );
}

export default ServiceForm;