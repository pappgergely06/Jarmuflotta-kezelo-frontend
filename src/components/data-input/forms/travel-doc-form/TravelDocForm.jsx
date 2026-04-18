import { Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import "../../../forms-style/FormsStyle.module.css"
import { useState } from "react";
import { FaRoute } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";

function TravelDocForm() {

    const [date, setDate] = useState("")
    const [startKm, setStartKm] = useState(0)
    const [endKm, setEndKm] = useState(0)

    function handleDateChange(event) {
        setDate(event.target.value)
    }

    function handleStartKmChange(event) {
        setStartKm(event.target.value)
    }

    function handleEndKmChange(event) {
        setEndKm(event.target.value)
    }

    function saveTravelDoc() {

    }

    return (
        <Flex height={"100%"} bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={"25%"}>
            <HStack justifyContent={"center"}>
                <FaRoute color="black" />
                <Text color={"black"} fontWeight={"bold"}>Menetlevél</Text>
            </HStack>
            <VStack>
                <Text color={"black"}>Dátum</Text>
                <input onChange={handleDateChange} value={date} type="date" />
            </VStack>
            <HStack width={"100%"}>
                <VStack>
                    <Text color={"black"}>Induló Km</Text>
                    <input onChange={handleStartKmChange} value={startKm} type="number" />
                </VStack>
                <VStack>
                    <Text color={"black"}>Záró Km</Text>
                    <input onChange={handleEndKmChange} value={endKm} type="number" />
                </VStack>
            </HStack>
            <IconButton onClick={saveTravelDoc} bg={"green.600"}>
                <IoIosSave />
                <Text>Rögzít</Text>
            </IconButton>
        </Flex>
    );
}

export default TravelDocForm;