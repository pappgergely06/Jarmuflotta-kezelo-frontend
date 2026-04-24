import { Box, Grid } from "@chakra-ui/react";
import TravelDocs from "../travel-docs/TravelDocs";
import Fuelings from "../fuelings/Fuelings";
import Services from "../services/Services";

function SavedVehicleData() {
    return (
        <Box width={"100%"} height={"100%"}>
            <Grid
                gridTemplateRows={"1fr"}
                gridTemplateColumns={"1fr 1fr 1fr"}
                gap={"2rem"}
            >
                <TravelDocs/>
                <Fuelings/>
                <Services/>
            </Grid>
        </Box>
    );
}

export default SavedVehicleData;