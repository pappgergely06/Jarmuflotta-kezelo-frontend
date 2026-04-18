import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import "../forms-style/FormsStyle.module.css"
import { useState } from "react";
import { BsFuelPumpFill } from "react-icons/bs";

function FuelingForm() {

    const [date, setDate] = useState("")
    const [amountLiters, setAmountLiters] = useState(0)
    const [pricePerLiter, setPricePerLiter] = useState(0)

    function handleDateChange(event) {
        setDate(event.target.value)
    }

    function handleAmountLitersChange(event) {
        setAmountLiters(event.target.value)
    }

    function handlePricePerLiterChange(event) {
        setPricePerLiter(event.target.value)
    }

    function saveFueling() {

    }

    return (
        <Flex bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={"33%"}>
            <HStack justifyContent={"center"}>
                <BsFuelPumpFill color="black" />
                <Text color={"black"} fontWeight={"bold"}>Tankolás</Text>
            </HStack>
            <VStack>
                <Text color={"black"}>Dátum</Text>
                <input onChange={handleDateChange} value={date} type="date" />
            </VStack>
            <HStack width={"100%"}>
                <VStack>
                    <Text color={"black"}>Tankolt Literek</Text>
                    <input onChange={handleAmountLitersChange} value={amountLiters} type="number" />
                </VStack>
                <VStack>
                    <Text color={"black"}>Literenkénti Ár</Text>
                    <input onChange={handlePricePerLiterChange} value={pricePerLiter} type="number" />
                </VStack>
            </HStack>
            <Button onClick={saveFueling} bg={"green.600"}>Rögzít</Button>
        </Flex>
    );
}

export default FuelingForm;