import { Alert, Box, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import "../../../forms-style/FormsStyle.module.css"
import { useState } from "react";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoIosSave } from "react-icons/io";
import useAuth from "../../../../hooks/useAuth";
import useSelectedVehicle from "../../../../hooks/useSelectedVehicle";
import { addFueling } from "../../../../utils/api";
import Cookies from "js-cookie";
import { useRefresh } from "../../../../contexts/refresh/RefreshContext";

function FuelingForm({ width }) {


    const { triggerRefresh } = useRefresh()
    const { user } = useAuth()
    const { selectedVehicle } = useSelectedVehicle()

    const today = new Date().toISOString().split('T')[0];

    const [date, setDate] = useState(today)
    const [amountLiters, setAmountLiters] = useState(5)
    const [pricePerLiter, setPricePerLiter] = useState(100)
    const [error, setError] = useState(null)

    function handleDateChange(event) {
        setDate(event.target.value)
    }

    function handleAmountLitersChange(event) {
        setAmountLiters(event.target.value)
    }

    function handlePricePerLiterChange(event) {
        setPricePerLiter(event.target.value)
    }

    function clearForm() {
        setDate(today)
        setAmountLiters(5)
        setPricePerLiter(100)
        setError(null)
    }

    function validateFueling() {
        if (user.role === "admin" && selectedVehicle === null) return "Válasszon ki járművet a táblázatból!"
        if (!date) return "Dátum megadása kötelező!!";
        if (amountLiters < 5) return "5 liter alatti tankolás nem rögzíthető!";
        if (pricePerLiter < 100) return "Érvénytelen literenkénti ár!";
        return null;
    }

    function saveFueling() {
        const e = validateFueling()
        const vehicle_id = user.role === "admin" ? selectedVehicle : user.driver_vehicle_id
        if (e === null) {
            addFueling(Cookies.get("auth_token"), {
                "date": date,
                "amount_liters": amountLiters,
                "price_per_liter": pricePerLiter,
                "vehicle_id": vehicle_id
            })
            triggerRefresh("fuelings")
            clearForm()
        } else {
            setError(e)
        }
    }

    return (
        <Flex height={"100%"} bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={width}>
            <HStack justifyContent={"center"}>
                <BsFuelPumpFill color="black" />
                <Text color={"black"} fontWeight={"bold"}>Tankolás</Text>
            </HStack>
            <VStack width={"100%"}>
                <Text color={"black"}>Dátum</Text>
                <input min={today} onChange={handleDateChange} value={date} type="date" />
            </VStack>
            <HStack width={"100%"}>
                <VStack width={"50%"}>
                    <Text color={"black"}>Tankolt Literek</Text>
                    <input min={1} onChange={handleAmountLitersChange} value={amountLiters} type="number" />
                </VStack>
                <VStack width={"50%"}>
                    <Text color={"black"}>Literenkénti Ár</Text>
                    <input min={1} onChange={handlePricePerLiterChange} value={pricePerLiter} type="number" />
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
            <IconButton onClick={saveFueling} bg={"green.600"}>
                <IoIosSave />
                <Text>Rögzít</Text>
            </IconButton>
        </Flex>
    );
}

export default FuelingForm;