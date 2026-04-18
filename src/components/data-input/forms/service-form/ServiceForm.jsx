import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import "../forms-style/FormsStyle.module.css"
import { useState } from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";

function ServiceForm() {

    const [date, setDate] = useState("")
    const [type, setType] = useState("")
    const [nextService, setNextService] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)

    function handleDateChange(event) {
        setDate(event.target.value)
    }

    function handleTypeChange(event) {
        setType(event.target.value)
    }

    function handleNextServiceChange(event) {
        setNextService(event.target.value)
    }

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handlePriceChange(event) {
        setPrice(event.target.value)
    }

    function saveService() {

    }

    return (
        <Flex bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={"33%"}>
            <HStack justifyContent={"center"}>
                 <FaScrewdriverWrench color="black"/>
                <Text color={"black"} fontWeight={"bold"}>Szerviz</Text>
            </HStack>
            <HStack width={"100%"}>
                <VStack>
                    <Text color={"black"}>Dátum</Text>
                    <input onChange={handleDateChange} value={date} type="date" />
                </VStack>
                <VStack>
                    <Text color={"black"}>Megnevezés</Text>
                    <input onChange={handleTitleChange} value={title} type="text" />
                </VStack>
            </HStack>
            <HStack width={"100%"}>
                <VStack>
                    <Text color={"black"}>Következő szerviz</Text>
                    <input onChange={handleNextServiceChange} value={nextService} type="date" />
                </VStack>
                <VStack>
                    <Text color={"black"}>Típus</Text>
                    <input onChange={handleTypeChange} value={type} type="text" />
                </VStack>
                <VStack>
                    <Text color={"black"}>Ár</Text>
                    <input onChange={handlePriceChange} value={price} type="number" />
                </VStack>
            </HStack>
            <Button onClick={saveService} bg={"green.600"}>Rögzít</Button>
        </Flex>
    );
}

export default ServiceForm;