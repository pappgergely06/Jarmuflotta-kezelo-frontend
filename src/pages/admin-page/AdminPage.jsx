import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { Provider } from '../../components/ui/chakra-snippets/provider';
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import style from './AdminPage.module.css'
import Navbar from '../../components/navbar/Navbar';

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
                <Navbar/>
                <Grid
                    w="90vw"
                    h="85vh"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={2}
                    fontFamily={"sans-serif"}
                >
                    <GridItem
                        bg={"gray.50"}
                        colSpan={2}
                        rowSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Box
                            width={"100%"}
                            height={"5vh"}
                            bg={"gray.200"}
                            borderRadius={"0.5rem 0.5rem 0 0"}

                        >
                            <Flex
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                width={"100%"}
                                height={"100%"}
                                paddingLeft={"1rem"}
                            >
                                <Text color={"black"} fontWeight={"bold"}>Flotta áttekintés</Text>
                            </Flex>
                        </Box>
                    </GridItem>

                    <GridItem
                        bg={"gray.50"}
                        colSpan={3}
                        rowSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Box
                            width={"100%"}
                            height={"5vh"}
                            bg={"gray.200"}
                            borderRadius={"0.5rem 0.5rem 0 0"}
                        >
                            <Flex
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                width={"100%"}
                                height={"100%"}
                                paddingLeft={"1rem"}
                            >
                                <Text color={"black"} fontWeight={"bold"}>Járművek</Text>
                            </Flex>
                        </Box>
                    </GridItem>

                    <GridItem
                        bg={"gray.50"}
                        colSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Box
                            width={"100%"}
                            height={"5vh"}
                            bg={"gray.200"}
                            borderRadius={"0.5rem 0.5rem 0 0"}
                        >
                            <Flex
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                width={"100%"}
                                height={"100%"}
                                paddingLeft={"1rem"}
                            >
                                <Text color={"black"} fontWeight={"bold"}>Sofőrök</Text>
                            </Flex>
                        </Box>
                    </GridItem>

                    <GridItem
                        bg={"gray.50"}
                        colSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Box
                            width={"100%"}
                            height={"5vh"}
                            bg={"gray.200"}
                            borderRadius={"0.5rem 0.5rem 0 0"}
                        >
                            <Flex
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                width={"100%"}
                                height={"100%"}
                                paddingLeft={"1rem"}
                            >
                                <Text color={"black"} fontWeight={"bold"}>Adatbevitel</Text>
                            </Flex>
                        </Box>
                    </GridItem>

                    <GridItem
                        bg={"gray.50"}
                        colSpan={1}
                        borderRadius="0.5rem"
                    >
                        <Box
                            width={"100%"}
                            height={"5vh"}
                            bg={"gray.200"}
                            borderRadius={"0.5rem 0.5rem 0 0"}
                        >
                            <Flex
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                width={"100%"}
                                height={"100%"}
                                paddingLeft={"1rem"}
                            >
                                <Text color={"black"} fontWeight={"bold"}>Költségkimutatás</Text>
                            </Flex>
                        </Box>
                    </GridItem>

                </Grid>
            </Flex>
        </Provider>
    );
}

export default AdminPage;