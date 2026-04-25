import { Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import "../../../forms-style/FormsStyle.module.css";
import { useState } from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import { addService } from "../../../../utils/api";
import Cookies from "js-cookie";
import { useRefresh } from "../../../../contexts/refresh/RefreshContext";
import useSelectedVehicle from "../../../../hooks/useSelectedVehicle";
import useAuth from "../../../../hooks/useAuth";


function ServiceForm({ width }) {

    const today = new Date().toISOString().split('T')[0];

    const [date, setDate] = useState(today);
    const [type, setType] = useState("");
    const [nextService, setNextService] = useState(today);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState({});

    const { triggerRefresh } = useRefresh();
    const { user } = useAuth();
    const { selectedVehicle } = useSelectedVehicle();

    const vehicle_id = user?.role === "admin" ? selectedVehicle : user?.driver_vehicle_id;

    const validate = () => {
        let e = {};
        if (!date) e.date = "Dátum kötelező";
        if (!title) e.title = "Megnevezés kötelező";
        if (!type) e.type = "Típus kötelező";
        if (price < 1) e.price = "Hibás ár";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    function clearForm() {
        setDate(today);
        setType("");
        setNextService(today);
    }

    function saveService() {
        if (!validate()) return;

        addService(Cookies.get("auth_token"), {
            "date": date,
            "type": type,
            "next_service": nextService,
            "vehicle_id": vehicle_id
        }).then(() => {
            alert("Szerviz rögzítve!");
            triggerRefresh("services");
            clearForm()
        }).catch(err => {
            console.error(err);
            alert("Hiba történt a mentés során.");
        });
    }

    return (
        <Flex height={"100%"} bg={"gray.200"} borderRadius={"md"} p={"0.5rem"} flexDirection={"column"} gap={"0.5rem"} width={width}>
            <HStack justifyContent={"center"}>
                <FaScrewdriverWrench color="black" />
                <Text color={"black"} fontWeight={"bold"}>Szerviz</Text>
            </HStack>

            <HStack width={"100%"} alignItems="flex-start">
                <VStack width={"50%"} align="stretch">
                    <Text color={"black"}>Dátum</Text>
                    <input min={today} onChange={(e) => setDate(e.target.value)} value={date} type="date" />
                    {errors.date && <Text color="red.500" fontSize="xs">{errors.date}</Text>}
                </VStack>
                <VStack width={"50%"} align="stretch">
                    <Text color={"black"}>Következő szerviz</Text>
                    <input onChange={(e) => setNextService(e.target.value)} value={nextService} type="date" />
                </VStack>
            </HStack>

            <HStack width={"100%"} alignItems="flex-start">
                <VStack width={"100%"} align="stretch">
                    <Text color={"black"}>Típus</Text>
                    <input onChange={(e) => setType(e.target.value)} value={type} type="text" placeholder="pl. kötelező" />
                    {errors.type && <Text color="red.500" fontSize="xs">{errors.type}</Text>}
                </VStack>
            </HStack>

            <IconButton onClick={saveService} bg={"green.600"} color="white" mt={2}>
                <IoIosSave />
                <Text ml={2}>Rögzít</Text>
            </IconButton>
        </Flex>
    );
}

export default ServiceForm;