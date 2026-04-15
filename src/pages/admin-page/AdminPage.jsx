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
                <Box
                    bg="#121C1E"
                    colSpan={3}
                    marginBottom={2}
                    w="90vw"
                    h="10vh"
                    borderRadius="0.5rem"
                >

                </Box>
                <Grid
                    w="90vw"
                    h="85vh"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={2}
                >
                    <GridItem
                        bg={"beige"}
                        colSpan={2}
                        rowSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Box></Box>
                    </GridItem>

                    <GridItem
                        bg={"beige"}
                        colSpan={3}
                        rowSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Box></Box>
                    </GridItem>

                    <GridItem
                        bg={"beige"}
                        colSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Box></Box>
                    </GridItem>

                    <GridItem
                        bg={"beige"}
                        colSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Box></Box>
                    </GridItem>

                    <GridItem
                        bg={"beige"}
                        colSpan={1}
                        borderRadius="0.5rem"
                    >
                        <Box></Box>
                    </GridItem>

                </Grid>
            </Flex>
        </Provider>
    );
}

export default AdminPage;