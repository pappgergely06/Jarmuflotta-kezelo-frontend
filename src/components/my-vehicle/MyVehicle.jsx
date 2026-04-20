import { Box } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import MyVehicleTable from "./my-vehicle-table/MyVehicleTable";

function MyVehicle() {
    return (
        <GridBox header={"Járművem"}>
            <Box
                h="calc(100% - 5vh)"
                overflowY="auto"
            >
                <MyVehicleTable/>
            </Box>
        </GridBox>
    );
}

export default MyVehicle;