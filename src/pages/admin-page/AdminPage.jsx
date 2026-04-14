import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { Provider } from '../../components/ui/chakra-snippets/provider';
import style from './AdminPage.module.css'

function AdminPage() {
    return (
        <Provider>
            <Flex
                width={"100%"}
                minHeight={"100vh"}
                px={4}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                bg={'rgb(48, 166, 172)'}
            >
                <Grid
                    h="200px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                >
                    <GridItem bg={"beige"} rowSpan={2} colSpan={1}>
                        <Box>rowSpan=2</Box>
                    </GridItem>
                    <GridItem bg={"beige"} colSpan={2}>
                        <Box>colSpan=2</Box>
                    </GridItem>
                    <GridItem bg={"beige"} colSpan={2}>
                        <Box>colSpan=2</Box>
                    </GridItem>
                    <GridItem bg={"beige"} colSpan={4}>
                        <Box>colSpan=4</Box>
                    </GridItem>
                </Grid>
            </Flex>
        </Provider>
    );
}

export default AdminPage;