import { Button, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import "../../forms-style/FormsStyle.module.css"
import { useState } from "react"
import { FaFileAlt } from "react-icons/fa"


function CostStatementForm() {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [typeOfQuery, setTypeOfQuery] = useState("")

    function handleStartDateChange(event) {
        setStartDate(event.target.value)
    }

    function handleEndDateChange(event) {
        setEndDate(event.target.value)
    }

    function handleTypeofQueryChange(event) {
        setTypeOfQuery(event.target.value)
    }

    function sendCostStatement() {

    }

    return (
        <Flex height={"100%"} bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={"100%"}>
            <HStack width={"100%"}>
                <VStack width={"50%"}>
                    <Text color={"black"}>Kezdő dátum</Text>
                    <input onChange={handleStartDateChange} value={startDate} type="date" />
                </VStack>
                <VStack width={"50%"}>
                    <Text color={"black"}>Záró dátum</Text>
                    <input onChange={handleEndDateChange} value={endDate} type="date" />
                </VStack>
            </HStack>
            <HStack>

            </HStack>
            <IconButton onClick={sendCostStatement} bg={"blue.600"}>
                <FaFileAlt/>
                <Text>Generál</Text>
            </IconButton>
        </Flex>
    );
}

export default CostStatementForm;