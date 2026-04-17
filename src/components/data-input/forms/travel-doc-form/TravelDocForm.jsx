import { Flex, Text } from "@chakra-ui/react";
import style from "./TravelDocForm.module.css"

function TravelDocForm() {
    return (
        <Flex flexDirection={"column"} gap={"0.5rem"}>
            <Text>Menetlevél</Text>
            <label htmlFor="traveldate">Dátum</label>
            <input type="date" id="traveldate" className={style.traveldate} />
        </Flex>
    );
}

export default TravelDocForm;