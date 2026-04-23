import { Alert, Box, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import "../../../forms-style/FormsStyle.module.css"
import { useEffect, useState } from "react";
import { FaRoute } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import { addTravelDoc, fetchVehicleById, updateOdometer } from "../../../../utils/api";
import Cookies from "js-cookie";
import useAuth from "../../../../hooks/useAuth";
import useSelectedVehicle from "../../../../hooks/useSelectedVehicle";

function TravelDocForm({ width }) {

    const { user } = useAuth()
    const { selectedVehicle } = useSelectedVehicle()

    const today = new Date().toISOString().split('T')[0];

    const [date, setDate] = useState(today)
    const [startKm, setStartKm] = useState(0)
    const [endKm, setEndKm] = useState(0)
    const [error, setError] = useState(null)

    const vehicle_id = user.role === "admin" ? selectedVehicle : user.driver_vehicle_id

    const getCurrentOdometer = async () => {
        fetchVehicleById(token, vehicle_id)
            .then((data) => {
                return (
                    setStartKm(data.start_odometer),
                    setEndKm(data.start_odometer + 1)
                )
            })
    }

    useEffect(() => {
        if (vehicle_id) {
            getCurrentOdometer();
        }
    }, [vehicle_id]);

    const token = Cookies.get("auth_token")

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
        if (user.role === "admin" && selectedVehicle === null) return "Válasszon ki járművet a táblázatból!"
        if (!date) return "Dátum megadása kötelező!";
        if (!startKm || !endKm) return "A kilométer óra állások kitöltése kötelező!";
        if (Number(endKm) <= Number(startKm)) return "A záró km nem lehet kevesebb az induló km-nél!";
        return null;
    }

    function clearForm() {
        setDate(today)
        getCurrentOdometer()
        setError(null)
    }

    function saveTravelDoc() {
        const e = validateTravelDoc()
        if (e === null) {
            addTravelDoc(token, {
                "date": date,
                "start_km": startKm,
                "end_km": endKm,
                "vehicle_id": vehicle_id
            })
            updateOdometer(token, vehicle_id, {
                "start_odometer": endKm
            })
            clearForm()
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
                <input min={today} onChange={handleDateChange} value={date} type="date" />
            </VStack>
            <HStack width={"100%"}>
                <VStack width={"50%"}>
                    <Text color={"black"}>Induló Km</Text>
                    <input disabled onChange={handleStartKmChange} value={startKm} type="number" />
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