import { Box } from "@chakra-ui/react";
import GridBox from "../ui/grid-box/GridBox";
import MyDataTable from "./my-data-table/MyDataTable";

function MyData() {
    return (
        <GridBox header={"Saját adatok"}>
            <Box h="calc(100% - 5vh)" overflowY={"auto"}>
                <MyDataTable/>
            </Box>
        </GridBox>
    );
}

export default MyData;