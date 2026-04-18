import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import style from "./TravelDocForm.module.css"
import { useState } from "react";

function TravelDocForm() {

    const [date, setDate] = useState("")
    const [startKm, setStartKm] = useState(0)
    const [endKm, setEndKm] = useState(0)

    function handleDateChange(event) {
        console.log(event.target.value)
        setDate(event.target.value)
    }

    function handleStartKmChange(event) {
        console.log(event.target.value)
        setStartKm(event.target.value)
    }

    function handleEndKmChange(event) {
        console.log(event.target.value)
        setEndKm(event.target.value)
    }

    function saveTravelDoc() {
        
    }

    return (
        <Flex bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={"33%"}>
            <Text textAlign={"center"} color={"black"} fontWeight={"bold"}>Menetlevél</Text>
            <VStack>
                <Text color={"black"}>Dátum</Text>
                <input onChange={handleDateChange} value={date} type="date" className={style.traveldate} />
            </VStack>
            <HStack width={"100%"}>
                <VStack>
                    <Text color={"black"}>Induló Km</Text>
                    <input onChange={handleStartKmChange} value={startKm} type="number" placeholder="Induló km" />
                </VStack>
                <VStack>
                    <Text color={"black"}>Záró Km</Text>
                    <input onChange={handleEndKmChange} value={endKm} type="number" placeholder="Induló km" />
                </VStack>
            </HStack>
            <Button onClick={saveTravelDoc} bg={"green.600"}>Rögzít</Button>
        </Flex>
    );
}

export default TravelDocForm;