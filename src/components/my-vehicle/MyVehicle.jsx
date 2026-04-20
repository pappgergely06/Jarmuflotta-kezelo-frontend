import { DataList, HStack } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";

function MyVehicle() {
    return (
        <GridBox header={"Járművem"}>
            <HStack h="calc(100% - 5vh)" padding={"0.5rem"}>
                <DataList.Root orientation={"horizontal"}>
                    <DataList.Item>
                        <DataList.ItemLabel fontSize={"md"}>Rendszám</DataList.ItemLabel>
                        <DataList.ItemValue fontSize={"md"} color={"black"}>AAMF-342</DataList.ItemValue>
                    </DataList.Item>

                    <DataList.Item>
                        <DataList.ItemLabel fontSize={"md"}>Alvázszám</DataList.ItemLabel>
                        <DataList.ItemValue fontSize={"md"} color={"black"}>WVWZZZ23416772W0001</DataList.ItemValue>
                    </DataList.Item>

                    <DataList.Item>
                        <DataList.ItemLabel fontSize={"md"}>Évjárat</DataList.ItemLabel>
                        <DataList.ItemValue fontSize={"md"} color={"black"}>2004</DataList.ItemValue>
                    </DataList.Item>

                    <DataList.Item>
                        <DataList.ItemLabel fontSize={"md"}>Márka</DataList.ItemLabel>
                        <DataList.ItemValue fontSize={"md"} color={"black"}>Ford</DataList.ItemValue>
                    </DataList.Item>

                    <DataList.Item>
                        <DataList.ItemLabel fontSize={"md"}>Óraállás</DataList.ItemLabel>
                        <DataList.ItemValue fontSize={"md"} color={"black"}>261000km</DataList.ItemValue>
                    </DataList.Item>

                    <DataList.Item>
                        <DataList.ItemLabel fontSize={"md"}>Kötelező biz.</DataList.ItemLabel>
                        <DataList.ItemValue fontSize={"md"} color={"black"}>2027-04-01</DataList.ItemValue>
                    </DataList.Item>

                    <DataList.Item>
                        <DataList.ItemLabel fontSize={"md"}>Műszaki érv.</DataList.ItemLabel>
                        <DataList.ItemValue fontSize={"md"} color={"black"}>2028-05-17</DataList.ItemValue>
                    </DataList.Item>
                </DataList.Root>
            </HStack>
        </GridBox>
    );
}

export default MyVehicle;