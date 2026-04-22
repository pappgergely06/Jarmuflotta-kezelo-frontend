import { Alert, Box, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import "../../../forms-style/FormsStyle.module.css"
import { useState } from "react";
import { FaRoute } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import { addTravelDoc } from "../../../../utils/api";
import Cookies from "js-cookie";
import useAuth from "../../../../hooks/useAuth";

function TravelDocForm({ width }) {

    const { user } = useAuth()

    const [date, setDate] = useState("")
    const [startKm, setStartKm] = useState(0)
    const [endKm, setEndKm] = useState(0)
    const [error, setError] = useState(null)

    function handleDateChange(event) {
        setDate(event.target.value)
    }

    function handleStartKmChange(event) {
        setStartKm(event.target.value)
    }

    function handleEndKmChange(event) {
        setEndKm(event.target.value)
    }

    function validateTravelDoc() {
        if (!date) return "Dátum megadása kötelező!";
        if (!startKm || !endKm) return "A kilométer óra állások kitöltése kötelező!";
        if (Number(endKm) <= Number(startKm)) return "A záró km nem lehet kevesebb az induló km-nél!";
        return null;
    }

    function saveTravelDoc() {
        const e = validateTravelDoc()
        if (e === null) {
            addTravelDoc(Cookies.get("auth_token"), {
                "date": date,
                "start_km": startKm,
                "end_km": endKm,
                "vehicle_id": user.driver_vehicle_id
            })
        } else {
            setError(e)
        }

    }

    return (
        <Flex height={"100%"} bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={width}>
            <HStack justifyContent={"center"}>
                <FaRoute color="black" />
                <Text color={"black"} fontWeight={"bold"}>Menetlevél</Text>
            </HStack>
            <VStack>
                <Text color={"black"}>Dátum</Text>
                <input onChange={handleDateChange} value={date} type="date" />
            </VStack>
            <HStack width={"100%"}>
                <VStack width={"50%"}>
                    <Text color={"black"}>Induló Km</Text>
                    <input onChange={handleStartKmChange} value={startKm} type="number" />
                </VStack>
                <VStack width={"50%"}>
                    <Text color={"black"}>Záró Km</Text>
                    <input onChange={handleEndKmChange} value={endKm} type="number" />
                </VStack>
            </HStack>
            {
                error !== null && (
                    <Box>
                        <Alert.Root status="error">
                            <Alert.Indicator />
                            <Alert.Title>
                                {error}
                            </Alert.Title>
                        </Alert.Root>
                    </Box>
                )
            }
            <IconButton onClick={saveTravelDoc} bg={"green.600"}>
                <IoIosSave />
                <Text>Rögzít</Text>
            </IconButton>
        </Flex>
    );
}

export default TravelDocForm;